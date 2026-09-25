import { useRef, useState } from 'react'
import { AlertCircle, Check, Loader2 } from 'lucide-react'

import { cn } from '../../lib/cn'
import { site } from '../../data/site'
import { budgetOptions, timelineOptions } from '../../data/contact'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = {
  name: '',
  email: '',
  company: '',
  building: '',
  budget: '',
  timeline: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.building.trim()) errors.building = 'A sentence or two is enough to get started.'
  return errors
}

/**
 * DELIVERY — no server or email backend is wired up, so this does NOT post to
 * an endpoint that would silently drop the lead. Instead it hands the completed
 * inquiry to the visitor's own email client through a pre-filled `mailto:` to
 * the real address in `site.email`; the visitor sends it themselves, so nothing
 * is falsely reported as "received."
 *
 * INTEGRATION POINT: to deliver inquiries server-side instead (a smoother,
 * inline success without leaving the page), replace the `mailto:` hand-off
 * below with a call to your service (an API route, Formspree, Resend, EmailJS,
 * …) that resolves on success and rejects on failure. The submitting →
 * success/error flow around this call already handles both outcomes.
 */
function buildInquiryMailto(values) {
  const subject = `Project inquiry — ${values.name}${values.company ? ` · ${values.company}` : ''}`
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company && `Company / Product: ${values.company}`,
    values.budget && `Budget: ${values.budget}`,
    values.timeline && `Timeline: ${values.timeline}`,
    '',
    'What I’m building:',
    values.building,
  ]
    .filter(Boolean)
    .join('\n')
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

async function sendInquiry(values) {
  window.location.href = buildInquiryMailto(values)
  return values
}

const fieldBase =
  'w-full rounded-xl border bg-ink-dark/60 px-4 py-3 text-sm text-white transition-colors ' +
  'placeholder:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-ink'

/**
 * InquiryForm — a compact, accessible project-inquiry form.
 *
 * Requires only Name, Email, and "What are you building?"; everything else is
 * optional. Validation runs on blur and on submit, errors clear as they're
 * fixed, and the submit action moves through loading → success (or error)
 * states. Submission is intentionally front-end only — see `sendInquiry`.
 */
export function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const formRef = useRef(null)

  const submitting = status === 'submitting'

  const setField = (name) => (e) => {
    const { value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Once a field has been touched, clear its error the moment it's valid.
    if (touched[name]) {
      const nextForField = validate({ ...values, [name]: value })[name]
      setErrors((prev) => ({ ...prev, [name]: nextForField }))
    }
  }

  const handleBlur = (name) => () => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, building: true })
    if (Object.values(nextErrors).some(Boolean)) {
      const firstInvalid = ['name', 'email', 'building'].find((k) => nextErrors[k])
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    setStatus('submitting')
    try {
      await sendInquiry(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  // Success view — replaces the form once details are captured.
  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center py-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <Check size={22} />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-white">Just hit send.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
          I&apos;ve opened your email app with your project details ready to go — send it and it
          lands straight in my inbox. If nothing opened, email me directly at{' '}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={reset}
          className="focus-ring mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
            Name <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={setField('name')}
            onBlur={handleBlur('name')}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(fieldBase, errors.name ? 'border-accent bg-accent/[0.04]' : 'border-ink-border')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-accent">
              <AlertCircle size={13} /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
            Email <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={setField('email')}
            onBlur={handleBlur('email')}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(fieldBase, errors.email ? 'border-accent bg-accent/[0.04]' : 'border-ink-border')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-accent">
              <AlertCircle size={13} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company / Product (optional) */}
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-300">
          Company / Product <span className="text-slate-600">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Where you work, or the product's name"
          value={values.company}
          onChange={setField('company')}
          className={cn(fieldBase, 'border-ink-border')}
        />
      </div>

      {/* What are you building? */}
      <div>
        <label htmlFor="building" className="mb-1.5 block text-sm font-medium text-slate-300">
          What are you building? <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <textarea
          id="building"
          name="building"
          rows={4}
          placeholder="Tell me briefly what you're building, what you need help with, and where you're currently stuck."
          value={values.building}
          onChange={setField('building')}
          onBlur={handleBlur('building')}
          aria-required="true"
          aria-invalid={!!errors.building}
          aria-describedby={errors.building ? 'building-error' : undefined}
          className={cn(
            fieldBase,
            'resize-y',
            errors.building ? 'border-accent bg-accent/[0.04]' : 'border-ink-border',
          )}
        />
        {errors.building && (
          <p id="building-error" className="mt-1.5 flex items-center gap-1 text-xs text-accent">
            <AlertCircle size={13} /> {errors.building}
          </p>
        )}
      </div>

      {/* Budget + Timeline (optional) */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-slate-300">
            Budget range <span className="text-slate-600">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={setField('budget')}
            className={cn(fieldBase, 'border-ink-border', !values.budget && 'text-slate-600')}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o} className="text-white">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-slate-300">
            Timeline <span className="text-slate-600">(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={setField('timeline')}
            className={cn(fieldBase, 'border-ink-border', !values.timeline && 'text-slate-600')}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((o) => (
              <option key={o} value={o} className="text-white">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Error state — surfaces when a real integration rejects the submission. */}
      {status === 'error' && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-accent/50 bg-accent/[0.06] px-4 py-3 text-sm text-slate-200"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-accent" />
          <span>
            Something went wrong sending your message. Please email me directly at{' '}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              {site.email}
            </a>
            .
          </span>
        </p>
      )}

      {/* Submit */}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="focus-ring inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-strong active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Starting…
            </>
          ) : (
            'Start a Conversation'
          )}
        </button>
        <p className="text-xs text-slate-600">
          <span aria-hidden="true" className="text-accent">*</span> Required — I only use these
          details to reply.
        </p>
      </div>

      {/* Polite status region for assistive tech. */}
      <p className="sr-only" role="status" aria-live="polite">
        {submitting ? 'Submitting your project details.' : ''}
      </p>
    </form>
  )
}

export default InquiryForm


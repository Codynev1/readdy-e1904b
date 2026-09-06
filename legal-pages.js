export const pages = {
  privacy: { title: 'Privacy Policy', eyebrow: 'Legal', updated: 'Last updated September 1, 2026', intro: 'NevTech AI collects only what we need to respond to you and deliver our services. This page explains what that is and how we handle it.', sections: [
    { h: 'Information we collect', p: ['Contact details you give us through forms, email, or phone: name, email, phone, company, and the content of your message. Usage data from this website through standard analytics (pages visited, device type, approximate location).', 'For Nova AI and other services, call recordings, transcripts, and related business data are processed on your behalf under our service agreement and, where applicable, a Business Associate Agreement.'] },
    { h: 'How we use it', p: ['To reply to inquiries, deliver and support services, send service-related notices, and improve this site. We do not sell personal information. We do not use client data to train models without written consent.'] },
    { h: 'Sharing', p: ['We share data with subprocessors required to deliver services (hosting, telephony, email delivery, analytics) under contracts that limit their use of it, and when required by law.'] },
    { h: 'Retention and security', p: ['We keep data as long as needed for the purposes above or as required by law, and delete or anonymize it afterward. Access is limited to staff who need it, and data is encrypted in transit and at rest.'] },
    { h: 'Your choices', p: ['You can request access to, correction of, or deletion of your personal information by emailing cody@nevtech.io. You can opt out of marketing email at any time.'] },
    { h: 'Contact', p: ['NevTech AI, Indianapolis, IN · cody@nevtech.io · (317) 508-9493'] } ] },
  terms: { title: 'Terms of Service', eyebrow: 'Legal', updated: 'Last updated September 1, 2026', intro: 'These terms govern use of nevtech.ai and the services described on it. Individual engagements are governed by a signed proposal or service agreement, which controls if it conflicts with these terms.', sections: [
    { h: 'Services', p: ['NevTech AI provides consulting, software development, AI agents, automation, and connectivity services as described in each proposal. Scope, price, and timeline are fixed in writing before work begins.'] },
    { h: 'Payment', p: ['Fixed-price projects are invoiced per the proposal schedule. Retainers are billed monthly in advance. Retainers may be cancelled with 30 days’ notice after an initial 90-day term.'] },
    { h: 'Ownership', p: ['Upon full payment, clients own the deliverables created specifically for them, including source code. NevTech retains ownership of pre-existing tools, frameworks, and products (including NevTech VMS and Catalyst), which are licensed for the client’s use.'] },
    { h: 'AI systems', p: ['AI outputs can be wrong. Clients agree to keep human review in place for consequential decisions and to use AI systems in compliance with applicable law and their own industry regulations.'] },
    { h: 'Limitation of liability', p: ['To the extent permitted by law, NevTech’s liability for any claim is limited to the fees paid for the services giving rise to the claim in the preceding twelve months.'] },
    { h: 'Governing law', p: ['These terms are governed by the laws of the State of Indiana. Contact cody@nevtech.io with questions.'] } ] },
  security: { title: 'Security & Compliance', eyebrow: 'Security', updated: 'Last updated September 1, 2026', intro: 'How we protect client data across consulting engagements, Nova AI, NevTech VMS, and Catalyst.', sections: [
    { h: 'Data handling', p: ['Client data is encrypted in transit (TLS 1.2+) and at rest. Access follows least privilege with MFA required for all staff. Production access is logged and reviewed.'] },
    { h: 'HIPAA', p: ['Nova AI and related services can be deployed under a signed Business Associate Agreement for covered entities. PHI is segregated, retention is configurable, and recordings can be disabled.'] },
    { h: 'SOC 2 alignment', p: ['NevTech Catalyst is built to SOC 2 Type II control standards. Formal audit status and reports are available on request under NDA.'] },
    { h: 'AI model use', p: ['We do not train foundation models on client data. Where third-party model providers are used, we select enterprise agreements with zero data retention wherever available.'] },
    { h: 'Incident response', p: ['Suspected incidents are triaged within one business hour and affected clients are notified within 72 hours, or sooner where required by law or contract.'] },
    { h: 'Report a concern', p: ['Email cody@nevtech.io with “Security” in the subject line. We acknowledge every report.'] } ] },
  support: { title: 'Support', eyebrow: 'Support', updated: 'Hours: Mon–Fri 9–5 Eastern · Emergencies 24/7', intro: 'Clients can reach a person who knows their account. After hours, Nova answers and escalates emergencies to the on-call engineer.', sections: [
    { h: 'Phone', p: ['(317) 508-9493. During business hours you reach the team directly. After hours, Nova takes the call and pages on-call for outages affecting live systems.'] },
    { h: 'Email', p: ['cody@nevtech.io for anything non-urgent. We reply within one business day.'] },
    { h: 'Nova AI', p: ['Changes to greetings, hours, routing rules, or FAQs are typically live within one business day. Send the change by email or call it in.'] },
    { h: 'NevTech VMS and Catalyst', p: ['Product documentation and status are at nevtechvms.com and nevtechai.com. Priority support is included with every paid plan.'] },
    { h: 'Response targets', p: ['Outage affecting live calls or recording: 1 hour. Degraded service: 4 business hours. Change requests and questions: 1 business day.'] } ] }
};

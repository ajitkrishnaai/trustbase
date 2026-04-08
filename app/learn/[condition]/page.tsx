import { notFound } from 'next/navigation'
import { PatientViewerClient } from '@/app/patient/[token]/PatientViewerClient'
import { ContentCard } from '@/lib/supabase/types'

const demoContent: Record<string, ContentCard[]> = {
  cholesterol: [
    {
      icon: 'heart',
      headline: 'Why this visit matters',
      body: 'High cholesterol is called the "silent risk" because you can\'t feel it. This check-in gives you a clear picture of your heart health so you can make informed decisions — no guessing.',
    },
    {
      icon: 'microscope',
      headline: 'What your lipid panel tells us',
      body: 'We\'ll review four key numbers: total cholesterol, LDL ("bad"), HDL ("good"), and triglycerides. Together they show how well your body is managing fats in the blood.',
    },
    {
      icon: 'clipboard',
      headline: 'What to expect during the visit',
      body: 'Your provider will walk you through your latest lab results, explain what each number means, and discuss whether your current plan is working. Bring any questions — this is your time.',
    },
    {
      icon: 'leaf',
      headline: 'Small changes, big impact',
      body: 'Diet and exercise can move your cholesterol numbers meaningfully. Your provider may suggest specific adjustments — like adding soluble fiber or reducing saturated fat — tailored to your results.',
    },
    {
      icon: 'target',
      headline: 'You\'re already ahead',
      body: 'Showing up for a cholesterol check-in means you\'re taking your health seriously. Most people don\'t. Whatever your numbers say, we\'ll build a plan together.',
    },
  ],
  diabetes: [
    {
      icon: 'chart',
      headline: 'Why this check-in matters',
      body: 'Diabetes management is a marathon, not a sprint. Regular check-ins catch small shifts before they become big problems — and help you fine-tune what\'s working.',
    },
    {
      icon: 'droplet',
      headline: 'Understanding your A1C',
      body: 'Your A1C measures average blood sugar over the past 2-3 months. It\'s the most reliable snapshot of how your diabetes is being managed day to day.',
    },
    {
      icon: 'pill',
      headline: 'Medication and lifestyle check',
      body: 'Your provider will review your current medications, ask about side effects, and check if your routine is sustainable. Honesty here helps us help you — no judgment.',
    },
    {
      icon: 'shield',
      headline: 'Screening for complications',
      body: 'We may check your feet, eyes, or kidney function. These screenings catch early signs of complications when they\'re easiest to address. Prevention is the goal.',
    },
    {
      icon: 'star',
      headline: 'You\'re doing the right thing',
      body: 'Managing diabetes takes daily effort, and showing up for this visit is part of that. We\'ll celebrate your wins and tackle challenges together.',
    },
  ],
  hypertension: [
    {
      icon: 'heart',
      headline: 'Why blood pressure matters',
      body: 'High blood pressure damages your arteries silently over time, increasing risk for heart attack and stroke. Monitoring it regularly is one of the most important things you can do.',
    },
    {
      icon: 'stethoscope',
      headline: 'What happens at this visit',
      body: 'We\'ll take your blood pressure reading (maybe a couple), review your recent trends, and discuss how your current treatment plan is working for you.',
    },
    {
      icon: 'leaf',
      headline: 'Lifestyle factors we\'ll discuss',
      body: 'Sodium intake, physical activity, stress, and sleep all affect blood pressure. Your provider will ask about these and suggest realistic adjustments you can try.',
    },
    {
      icon: 'pill',
      headline: 'Medication review',
      body: 'If you\'re on blood pressure medication, we\'ll check if the dose is right and whether you\'re experiencing side effects. Adjustments are normal — it\'s how we find your best fit.',
    },
    {
      icon: 'target',
      headline: 'Your numbers, your control',
      body: 'Hypertension is one of the most treatable conditions in medicine. With the right combination of lifestyle and medication, most people hit their target. You\'ve got this.',
    },
  ],
}

const demoAppointmentDates: Record<string, string> = {
  cholesterol: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  diabetes: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
  hypertension: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
}

interface PageProps {
  params: Promise<{ condition: string }>
}

export default async function LearnPage({ params }: PageProps) {
  const { condition } = await params

  const cards = demoContent[condition]
  if (!cards) {
    notFound()
  }

  return (
    <PatientViewerClient
      patientId={`demo-${condition}`}
      cards={cards}
      appointmentDate={demoAppointmentDates[condition]}
    />
  )
}

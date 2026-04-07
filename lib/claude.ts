import Anthropic from '@anthropic-ai/sdk'
import { ContentCard } from './supabase/types'

function getAnthropic() {
  return new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY!,
  })
}

export async function generateContentCards(visitType: string): Promise<ContentCard[]> {
  const anthropic = getAnthropic()
  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    system: 'You generate patient education content. Return valid JSON only.',
    messages: [
      {
        role: 'user',
        content: `Generate 5 patient education cards for a ${visitType} appointment. Each card must have: icon (single emoji), headline (short, max 8 words), body (2-3 conversational sentences, second person, no jargon). Cover: what to expect, why this visit matters, how to prepare, what happens during, encouragement for final card. Return a JSON array only, no markdown.`,
      },
    ],
  })

  const content = message.content[0]
  if (content.type !== 'text') {
    throw new Error('Unexpected response type from Claude')
  }

  try {
    const cards = JSON.parse(content.text)
    return cards as ContentCard[]
  } catch (error) {
    throw new Error('Failed to parse content cards from Claude response')
  }
}

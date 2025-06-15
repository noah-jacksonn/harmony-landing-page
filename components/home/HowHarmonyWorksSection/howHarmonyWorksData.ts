export interface Feature {
  id: string;
  title: string;
  description: string;
  links?: {
    text: string;
    url: string;
  }[];
  image: string;
  imageAlt: string;
}

export const features: Feature[] = [
  {
    id: 'emotionally-intelligence',
    title: 'Emotional Intelligence',
    description: 'Harmony senses your emotions through your voice using real-time audio analysis that identifies 48 distinct emotional states based on over 25 patterns of tone, rhythm, and timbre. Much of human communication lies beyond words, in the subtle emotions we intuitively perceive through things like tone of voice.\n\nHarmony picks up on things like tone of voice through state of the art technology, enabling emotional awareness and a deeper understanding of what you\'re truly saying. So if you say \'I\'m fine\' in that classic I\'m-definitely-not-fine tone, Harmony probably won\'t be fooled!',
    links: [
      {
        text: 'real-time audio analysis',
        url: 'https://www.hume.ai/products/speech-prosody-model'
      }
    ],
    image: '/AudioWave.png',
    imageAlt: 'Sound wave visualization'
  },
  {
    id: 'evidence-based',
    title: 'Evidence-Based Modality',
    description: 'Harmony takes an Internal Family Systems (IFS) approach to each session. IFS is a modern therapy that views the mind as composed of many different "parts". For example, in an argument with your partner, one part of you might want to make a hurtful remark, while another part might want to regain connection.\n\nHarmony helps guide you in connecting with and understanding your many parts and their deeper intentions. Harmony also helps you keep track of these parts clearly, bringing clarity and structure to the entire process. [Take our Introduction to IFS Course]',
    links: [
      {
        text: 'Take our Introduction to IFS Course',
        url: 'https://app.harmonyappai.com/learn/course/an-introduction-to-internal-family-systems-ifs/lesson/a-new-way-of-relating-to-ourselves-and-others?tab=overview'
      }
    ],
    image: '/TherapistWithClient.png',
    imageAlt: 'Therapy session illustration'
  },
  {
    id: 'journey-remembered',
    title: 'Your Journey, Remembered',
    description: 'Harmony remembers details of what you\'ve spoken about across sessions, helping you build on previous conversations. This gives Harmony the ability to recognize patterns, linking what was said in the current conversation to themes in past sessions, increasing clarity in your emotional and behavioral patterns.\n\nAfter each session, Harmony provides key insights made, highlights how that specific session ties into your broader work done together, and offers a thought-provoking question to take with you.',
    image: '/Map.png',
    imageAlt: 'Map visualization representing memory and insights'
  }
];
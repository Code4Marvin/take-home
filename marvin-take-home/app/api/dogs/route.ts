import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      title: "I don't want to work today, let's go home",
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog1.jpeg' },
      ],
      comments: [
        { user: 'John', text: 'Wow what a good boy!' },
        { user: 'Hannah', text: 'Absolutely stunning!' },
      ],
    },
    {
      title: 'Toronto service dog helps ROM staff member and looks adorable doing it',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog2.jpeg' },
      ],
      comments: [
        { user: 'Fiona', text: 'Future star in the making!' },
        { user: 'Julia', text: 'So cute and fluffy!' },
      ],
    },
    {
      title: 'Service dog in training on his first outing around trains! Looking forward to seeing this bit to great things for his person',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog3.jpeg' },
      ],
      comments: [{ user: 'Charlie', text: 'Adorable! Made my day!' }],
    },
    {
      title: 'WW2 photograph of a company mascot dog',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog4.jpeg' },
      ],
      comments: [{ user: 'Ethan', text: 'Can I adopt him?' }],
    },
    {
      title: 'Charlotte is fully grown so is able to get her final working harness and gear! She is absolutely loving showing off her spiffy new outfit to all her friends and family',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog5.jpeg' },
      ],
      comments: [{ user: 'Charlie', text: 'Future star in the making!' }],
    },
    {
      title: 'This is my new Urban Search and Rescue puppy. Ares.',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog6.jpeg' },
      ],
      comments: [{ user: 'Alice', text: 'What a brave little one!' }],
    },
    {
      title: 'Kruger and Sorra waiting to catch the bus after a training meet up! Sorra (shepherd ) does medical alert and Kruger(st bernard x lab) is training for psych and mobility. It was lovely to get the opportunity to meet other handlers again!',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog7.jpeg' },
      ],
      comments: [
        { user: 'Bob', text: 'What a brave little one!' },
        { user: 'Julia', text: 'A true bundle of joy!' },
      ],
    },
    {
      title: 'Beekeeping dog helps owners deliver honey',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog8.jpeg' },
      ],
      comments: [
        { user: 'Charlie', text: 'Heart-melting cuteness!' },
        { user: 'Julia', text: 'What a brave little one!' },
        { user: 'Diana', text: 'So cute and fluffy!' },
      ],
    },
    {
      title: "He's a rescue dog trainee (azubi in German)",
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog9.jpeg' },
      ],
      comments: [
        { user: 'Ivan', text: 'So cute and fluffy!' },
        { user: 'Bob', text: 'Heart-melting cuteness!' },
      ],
    },
    {
      title: 'Hendrix on his way to gather sheep',
      images: [
        { url: 'https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog10.jpeg' },
      ],
      comments: [
        { user: 'Julia', text: 'So cute and fluffy!' },
        { user: 'Ethan', text: 'Heart-melting cuteness!' },
        { user: 'Charlie', text: 'Heart-melting cuteness!' },
      ],
    },
  ]);
}

import Head from 'next/head'

interface MetaProps {
  title: string;
  description: string;
  image?: string;
}

export default function Meta({ title, description, image = '/images/favicon/palette.png' }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
    </Head>
  )
}

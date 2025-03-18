// Edit this file to customize your content
export const siteConfig = {
  // Hero Section
  hero: {
    title: "Barbara Gianezi",
    subtitle: "Nossa História de Amor",
    quote: "Cada momento ao seu lado é uma página especial na história da minha vida.",
    backgroundImage: "https://source.unsplash.com/1600x900/?romantic,couple", // ⬅️ MUDE ESTA URL para sua imagem de fundo
  },
  
  // Music player - ADICIONE SUAS MÚSICAS AQUI ⬇️
  music: {
    src: "/music/logoeu.mp3", // ⬅️ MUDE PARA O CAMINHO REAL DA SUA MÚSICA
    title: "Toque aqui",
    artist: "Jorge & Mateus",
    cover: "/music/cover.jpg", // ⬅️ MUDE PARA O CAMINHO DA IMAGEM DE CAPA DA MÚSICA
    autoPlay: true // Defina como false para desativar a reprodução automática
  },
  
  // Lista de reprodução - ADICIONE MAIS MÚSICAS AQUI SE DESEJAR
  playlist: [
    {
      id: 1,
      src: "/music/musica1.mp3", // ⬅️ CAMINHO PARA MÚSICA 1
      title: "Música Romântica 1",
      artist: "Artista 1",
      cover: "/music/cover1.jpg" // ⬅️ CAPA DA MÚSICA 1
    },
    {
      id: 2,
      src: "/music/musica2.mp3", // ⬅️ CAMINHO PARA MÚSICA 2
      title: "Música Romântica 2",
      artist: "Artista 2",
      cover: "/music/cover2.jpg" // ⬅️ CAPA DA MÚSICA 2
    }
  ],
  
  // Quotes to display
  quotes: [
    {
      text: "O tempo que passamos juntos é o tesouro mais precioso que tenho.",
      author: "Seu Amor"
    },
    {
      text: "Nosso amor é como um filme onde cada cena é mais linda que a anterior.",
      author: "Seu Amor"
    },
    {
      text: "Feliz aniversário para a mulher que ilumina todos os meus dias.",
      author: "Seu Amor"
    }
  ],
  
  // Photo memories - each category creates a carousel
  // ADICIONE SUAS FOTOS AQUI ⬇️ 
  photoCategories: [
    {
      title: "Nossos Momentos Especiais",
      memories: [
        {
          id: 1,
          imageSrc: "https://source.unsplash.com/random/600x900?couple,1", // ⬅️ MUDE PARA SUA FOTO REAL
          title: "Nosso Primeiro Encontro",
          date: "Janeiro 2023",
          description: "Aquele dia incrível que mudou nossas vidas para sempre."
        },
        {
          id: 2,
          imageSrc: "https://source.unsplash.com/random/600x900?couple,2",
          title: "Jantar Romântico",
          date: "Fevereiro 2023",
          description: "Uma noite inesquecível sob as estrelas."
        },
        {
          id: 3,
          imageSrc: "https://source.unsplash.com/random/600x900?couple,3",
          title: "Nosso Primeiro Viagem",
          date: "Março 2023",
          description: "Aventuras inesquecíveis juntos explorando novos lugares."
        },
        {
          id: 4,
          imageSrc: "https://source.unsplash.com/random/600x900?couple,4",
          title: "Piquenique no Parque",
          date: "Abril 2023",
          description: "Um dia perfeito com muitas risadas e amor."
        },
        {
          id: 5,
          imageSrc: "https://source.unsplash.com/random/600x900?couple,5",
          title: "Nosso Aniversário",
          date: "Maio 2023",
          description: "Celebrando cada momento que compartilhamos juntos."
        }
      ]
    },
    {
      title: "Momentos Felizes",
      memories: [
        {
          id: 6,
          imageSrc: "https://source.unsplash.com/random/600x900?love,1",
          title: "Momentos de Diversão",
          date: "Junho 2023",
          description: "Risadas que nunca acabam quando estamos juntos."
        },
        {
          id: 7,
          imageSrc: "https://source.unsplash.com/random/600x900?love,2",
          title: "Passeio no Parque",
          date: "Julho 2023",
          description: "Caminhadas, conversas e muitos sorrisos."
        },
        {
          id: 8,
          imageSrc: "https://source.unsplash.com/random/600x900?love,3",
          title: "Dia na Praia",
          date: "Agosto 2023",
          description: "Sol, mar e muito amor."
        },
        {
          id: 9,
          imageSrc: "https://source.unsplash.com/random/600x900?love,4",
          title: "Festa com Amigos",
          date: "Setembro 2023",
          description: "Compartilhando momentos especiais com pessoas especiais."
        },
        {
          id: 10,
          imageSrc: "https://source.unsplash.com/random/600x900?love,5",
          title: "Café da Manhã Especial",
          date: "Outubro 2023",
          description: "Pequenos momentos que significam tudo."
        }
      ]
    }
  ],
  
  // ADICIONE SEUS VÍDEOS AQUI ⬇️
  videos: [
    {
      id: 1,
      videoSrc: "/videos/nosso-video-1.mp4", // ⬅️ MUDE PARA O CAMINHO REAL DO SEU VÍDEO
      title: "Momentos Inesquecíveis",
      description: "Uma compilação dos nossos momentos mais especiais juntos.",
      poster: "/videos/thumbnail1.jpg" // ⬅️ MUDE PARA O CAMINHO DA IMAGEM DE CAPA DO VÍDEO
    },
    {
      id: 2,
      videoSrc: "https://example.com/videos/nosso-video-2.mp4", // Replace with your video URL
      title: "Nossa Viagem",
      description: "Lembranças maravilhosas da nossa viagem inesquecível.",
      poster: "https://source.unsplash.com/random/1280x720?couple,2"
    }
  ],
  
  // Birthday message
  birthdayMessage: {
    title: "Feliz Aniversário, Barbara!",
    message: "19 de Março, um dia muito especial que trouxe ao mundo a pessoa mais incrível que já conheci. Que este novo ano de vida seja repleto de alegrias, conquistas e momentos maravilhosos. Te amo infinitamente!"
  }
};

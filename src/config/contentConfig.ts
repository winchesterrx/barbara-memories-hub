
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
      text: " O tempo que passamos juntos é a bem mais precioso que eu tenho na minha vida!",
      author: "Gabriel"
    },
    {
      text: "Você é incrivel, continue assim. Sua felicidade também é a minha",
      author: "Gabriel"
    },
    {
      text: "Feliz aniversário para a mulher que ilumina todos os meus dias.",
      author: "Gabriel"
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
          imageSrc: "/img/3.jpg", // ⬅️ MUDE PARA SUA FOTO REAL
          title: "Nossa primeira ida ao parque",
          date: "Pirmeira fotos juntos",
          description: "Aquele dia incrível que mudou nossas vidas para sempre."
        },
        {
          id: 2,
          imageSrc: "/img/pedidodenamoro.jpg",
          title: "Pedido de Namoro",
          date: "09/jun/2024",
          description: "Esse dia foi especial, a primeira aliança a gente nunca esquece"
        },
        {
          id: 3,
          imageSrc: "/img/skimonovo.jpg",
          title: "Aquele primeiro 'Almoço' juntos",
          date: "Primeira vez que saimos para almoçar juntos",
          description: "Mesmo que o almoço tenha sido apenas um sorvetinho kk."
        },
        {
          id: 4,
          imageSrc: "/img/cav.jpg",
          title: "Apoiando o cav juntos",
          date: "Esse dia você foi pé frio kkk",
          description: "Mesmo sendo pé frio, não troco sua companhia por nada"
        },
        {
          id: 5,
          imageSrc: "/img/15.jpg",
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
          imageSrc: "/img/barbara.jpg",
          title: "Momentos em que me perco na sua beleza",
          date: "Você tem os olhos mais lindos que eu ja vi",
          description: "Te amo! ❤️"
        },
        {
          id: 7,
          imageSrc: "/img/rodeio.jpg",
          title: "Barretão Irullll",
          date: "24/ago/2024",
          description: ""
        },
        {
          id: 8,
          imageSrc: "/img/viagem.jpg",
          title: "ahhhhhhhhhh esse dia kk",
          date: "em alguma data de 2024",
          description: "Sol, mar e muito amor."
        },
        {
          id: 9,
          imageSrc: "/img/5.jpg",
          title: "Natal em Familia",
          date: "24/12/2024",
          description: "Compartilhando momentos especiais com pessoas especiais."
        },
        {
          id: 10,
          imageSrc: "/img/cafe.jpg",
          title: "Café da Manhã Especial",
          date: "19/03",
          description: "Fazer algo para você é tão bom"
        }
      ]
    }
  ],
  
  // ADICIONE SEUS VÍDEOS AQUI ⬇️
  videos: [
    {
      id: 1,
      videoSrc: "https://drive.google.com/uc?export=download&id=1-scCHN0pMJlmt8TXkVdg5s4jOKBQoFe1", // Link direto do Drive
      title: "Momentos Inesquecíveis",
      description: "Uma compilação dos nossos momentos mais especiais juntos.",
      poster: "/img/barbara.jpg" // Usando uma imagem do projeto como thumbnail
    },
    {
  id: 1,
  videoSrc: "https://drive.google.com/uc?export=download&id=1-scCHN0pMJlmt8TXkVdg5s4jOKBQoFe1", // Link direto do Drive
  title: "Momentos Inesquecíveis",
  description: "Uma compilação dos nossos momentos mais especiais juntos.",
  poster: "/img/barbara.jpg", // Usando uma imagem do projeto como thumbnail
  warning: "AVISO — ESPAÇO RESERVADO PARA FUTURAS VIAGENS" // Mensagem de aviso
}

  ],
  
  // Birthday message
  birthdayMessage: {
    title: "Feliz Aniversário, Meu amor!",
    message: "19 de Março, um dia muito especial que trouxe ao mundo a pessoa mais incrível que já conheci. Que nessa nova fase da sua vida seja repleta de conquistas e momentos maravilhosos. Te amo muito!"
  }
};

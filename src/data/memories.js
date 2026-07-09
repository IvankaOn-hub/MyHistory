import memoryOne from "../assets/images/memory-1.jpg";
import memoryTwo from "../assets/images/memory-2.jpg";
import memoryThree from "../assets/images/memory-3.jpg";

export const memories = [
  {
    id: 1,
    slug: "pierwsza-wycieczka-w-tatry",
    title: "Pierwsza wycieczka w Tatry",
    date: "2026-06-1",
    location: "Zakopane, Polska",
    category: "Podróże",
    categorySlug: "podroze",
    image: memoryOne,
    description: "Niezapomniany dzień w górach z najlepszymi ludźmi.",
    excerpt: "Widoki, które zostają w pamięci na zawsze.",
    isFavorite: true,
    tags: ["tatry", "góry", "wakacje"],
    media: [
      {
        id: 1,
        type: "image",
        src: memoryOne,
      },
      {
        id: 2,
        type: "image",
        src: memoryTwo,
      },
      {
        id: 3,
        type: "video",
        src: "https://www.youtube.com",
      },
      {
        id: 4,
        type: "video",
        src: "https://www.youtube.com",
      }
    ],
    
    weather: {
      temperature: 22,
      condition: "Słonecznie",
    },
    people: ["Michał"],
    emotions: [ "Spokój", "Zachwyt"]
  },
  {
    id: 2,
    slug: "urodziny-zosi",
    title: "Urodziny Zosi",
    date: "2026-06-2",
    location: "Wrocław, Polska",
    category: "Rodzina",
    categorySlug: "rodzina",
    image: memoryTwo,
    description: "Dużo radości, prezentów i pysznego tortu.",
    excerpt: "Moja mała księżniczka skończyła 3 latka.",
    isFavorite: false,
    tags: ["urodziny", "rodzina", "dziecko"],
    media: [
      {
        id: 1,
        type: "image",
        src: memoryOne,
      },
      {
        id: 2,
        type: "image",
        src: memoryTwo,
      },
      {
        id: 3,
        type: "video",
        src: "https://www.youtube.com",
      },
      {
        id: 4,
        type: "video",
        src: "https://www.youtube.com",
      }
    ],
    
    weather: {
      temperature: 22,
      condition: "Słonecznie",
    },
    people: ["Anna", "Zosia", "Michał"],
    emotions: ["Szczęście", "Spokój", "Zachwyt"]
  },
  {
    id: 3,
    slug: "piknik-w-parku",
    title: "Piknik w parku",
    date: "2026-05-12",
    location: "Park Szczytnicki, Wrocław",
    category: "Codzienność",
    categorySlug: "codziennosc",
    image: memoryThree,
    description: "Ciepłe popołudnie, dobra książka i domowe przekąski. Ciepłe popołudnie, dobra książka i domowe przekąski. Ciepłe popołudnie, dobra książka i domowe przekąski.",
    excerpt: "Proste chwile są najlepsze.",
    isFavorite: true,
    tags: ["piknik", "park", "spokój"],
    media: [
      {
        id: 1,
        type: "image",
        src: memoryOne,
      },
      {
        id: 2,
        type: "image",
        src: memoryTwo,
      },
      {
        id: 3,
        type: "video",
        src: "https://www.youtube.com",
      },
      {
        id: 4,
        type: "video",
        src: "https://www.youtube.com",
      }
    ],
    
    weather: {
      temperature: 22,
      condition: "Słonecznie",
    },
    people: ["Anna", "Zosia", "Michał"],
    emotions: ["Szczęście", "Spokój", "Zachwyt"]
    
  },
  {
    id: 4,
    slug: "piknik-w-parku",
    title: "Piknik w parku",
    date: "2026-07-11",
    location: "Park Szczytnicki, Wrocław",
    category: "Codzienność",
    categorySlug: "codziennosc",
    image: memoryThree,
    description: "Ciepłe popołudnie, dobra książka i domowe przekąski.",
    excerpt: "Proste chwile są najlepsze.",
    isFavorite: false,
    tags: ["piknik", "park", "spokój"],
    media: [
      {
        id: 1,
        type: "image",
        src: memoryOne,
      },
      {
        id: 2,
        type: "image",
        src: memoryTwo,
      },
      {
        id: 3,
        type: "video",
        src: "https://www.youtube.com",
      },
      {
        id: 4,
        type: "video",
        src: "https://www.youtube.com",
      }
    ],
    
    weather: {
      temperature: 22,
      condition: "Słonecznie",
    },
    people: ["Anna", "Zosia", "Michał"],
    emotions: ["Szczęście", "Spokój", "Zachwyt"]
  }
];

export default memories;
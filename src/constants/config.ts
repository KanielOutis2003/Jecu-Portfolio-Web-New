type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "John Jecu Cutanda | Portfolio",
    fullName: "John Jecu Cutanda",
    email: "johnjecu.cutanda@example.com",
  },
  hero: {
    name: "John Jecu Cutanda",
    p: ["I build robust full-stack systems,", "mobile applications, and database-driven platforms."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a dedicated Full-Stack Developer, Mobile App Developer, and Database Designer with a passion for building real-world systems. My expertise lies in creating reservation platforms, hotel management systems, and complex database-driven dashboards. I specialize in bridging the gap between robust backend architecture and intuitive user experiences, ensuring every system I build is scalable, efficient, and professional.`,
    },
    experience: {
      p: "My professional journey",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects demonstrate my technical proficiency and ability to deliver complex systems. From restaurant reservation platforms to IoT-integrated solutions, each project reflects my commitment to high-quality code and effective system design. Each entry includes a brief description along with links to repositories and live demos.`,
    },
  },
};

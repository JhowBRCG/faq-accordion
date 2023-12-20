interface AccordionTypes {
  id: number;
  title: string;
  text: string;
  isOpen: boolean;
}

export const AccordionData: AccordionTypes[] = [
  {
    id: 1,
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and for portfolio building.",
    isOpen: true,
  },

  {
    id: 2,
    title: "Is Frontend Mentor free?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and for portfolio building.",
    isOpen: false,
  },

  {
    id: 3,
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and for portfolio building.",
    isOpen: false,
  },

  {
    id: 4,
    title: "How can I get help if I'm stuck on a challenge?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and for portfolio building.",
    isOpen: false,
  },
];

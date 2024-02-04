import { atom, atomFamily } from "recoil";

// Atom for individual user fields
export const userNameAtom = atom({
  key: "userNameAtom",
  default: "bla bla ",
});

export const userEmailAtom = atom({
  key: "userEmailAtom",
  default: "",
});

export const userPhoneNumberAtom = atom({
  key: "userPhoneNumberAtom",
  default: "",
});

export const userPhotoAtom = atom({
  key: "userPhotoAtom",
  default: "",
});

export const userDomainAtom = atom({
  key: "userDomainAtom",
  default: "",
});

export const userYearAtom = atom({
  key: "userYearAtom",
  default: "",
});
export const userAdmissionNumberAtom = atom({
  key: "userAdmissionNumberAtom",
  default: "",
});

// Atom Family for social links
export const socialLinksAtomFamily = atomFamily({
  key: "socialLinksAtomFamily",
  default: () => "",
});

// Atom for quizzesTaken
export const quizzesTakenAtom = atom({
  key: "quizzesTakenAtom",
  default: [],
});

// Atom for the entire user
export const userAtom = atom({
  key: "userAtom",
  default: {
    name: userNameAtom,
    email: userEmailAtom,
    phoneNumber: userPhoneNumberAtom,
    photo: userPhotoAtom,
    domain: userDomainAtom,
    year: userYearAtom,
    admissionNumber: userAdmissionNumberAtom,
    resume: "",
    socialLinks: {
      github: socialLinksAtomFamily(""),
      linkedin: socialLinksAtomFamily(""),
      behance: socialLinksAtomFamily(""),
      hackerrank: socialLinksAtomFamily(""),
      Leetcode: socialLinksAtomFamily(""),
      Dribble: socialLinksAtomFamily(""),
      portfolio: socialLinksAtomFamily(""),
    },
    ShortList: false,
    interviewStatus: false,
    projectStatus: false,
    quizzesTaken: quizzesTakenAtom,
  },
});

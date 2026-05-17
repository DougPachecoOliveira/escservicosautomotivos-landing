import { initializeApp } from "firebase-admin/app";

initializeApp();

export { criarLead } from "./criarLead";
export { onLeadCreated } from "./onLeadCreated";
export { limparLeadsExpirados } from "./limparLeadsExpirados";

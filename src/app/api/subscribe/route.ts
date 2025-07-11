import { NextResponse } from "next/server";

import { resend } from "../../../lib/resend";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    await resend.contacts.create({
        email: email,
        unsubscribed: false,
        audienceId: '1125e4a8-203b-4516-b003-0e0dffc3a7f7',
      });

    await resend.emails.send({
      from: "PodKids App <hello@podkids.app>",
      to: email,
      subject: "Bienvenue dans l'aventure PodKids !",
      html: `
        <div>
          <h1>Merci de rejoindre l'aventure PodKids !</h1>
          <p><strong>C'est un grand jour pour PodKids App !</strong> Ce qui n'était à la base qu'une petite application de podcast pour ma fille devient une application un peu moins petite et, avec votre concours, elle grandira peut-être encore davantage.</p>
          <p>Je vais essayer d'être concis, mais j'ai quelques informations importantes à vous communiquer au préalable. Tout d'abord, désolé pour les utilisateurs d'iOS : cette première version alpha est disponible sous forme d'APK et ne peut donc être installée que sur Android. La version bêta iOS arrivera plus tard, courant 2026.</p>
          <p>Le but de cette version alpha est pour moi de recueillir un maximum de vos retours sur son fonctionnement, sur les erreurs que vous pourriez rencontrer, sur des pistes d'amélioration, etc. Bref, le plus de retours possible pour améliorer l'expérience utilisateur.</p>
          <p><strong>Pour l'instant, seules les fonctionnalités essentielles sont disponibles :</strong></p>
          <ul>
            <li>Ajout d'un code PIN parent,</li>
            <li>Création d'un profil enfant (un seul profil pour le moment),</li>
            <li>Ajout de vos propres podcasts,</li>
            <li>S'abonner et écouter des podcasts, évidemment.</li>
          </ul>
          <p>Les podcasts présents dans l'application sont issus d'une veille personnelle. Ils sont chargés dans la bibliothèque en fonction des tranches d'âge sélectionnées pour le profil enfant. Je vous invite vivement à ne pas sélectionner plus de deux tranches d'âge, sans quoi la mémoire interne du téléphone réservée à l'application risque d'être saturée.</p>
          <p>J'ai fait le choix de stocker les informations de l'application directement sur le téléphone pour le moment, afin d'éviter la création de comptes inutiles. Mais cela évoluera avec la version bêta, pour permettre la gestion de plusieurs profils enfants, l'ajout de nombreux podcasts supplémentaires et de nouvelles fonctionnalités.</p>
          <p>Si l'application plaît et se développe, je réfléchis actuellement à un modèle économique le plus accessible possible. Cependant, sachez qu'en participant au développement de cette version alpha, vous bénéficierez évidemment d'un accès très privilégié à la version finale.</p>
          <p>Vous pouvez me contacter via l'application ou à cette adresse e-mail : <a href="mailto:hello@podkids.app">hello@podkids.app</a></p>
          <p><strong>Voici enfin le lien de téléchargement de l'application :</strong><br>
          <a href="https://www.podkids.app/telechargement-v-0-1-0-alpha" target="_blank">https://www.podkids.app/telechargement-v-0-1-0-alpha</a></p>
          <p>Merci encore pour votre engouement, et bel été plein de podcasts !</p>
          <p><strong>Thomas - PodKids App</strong></p>
        </div>
      `,
    });

    // Envoyer une notification à l'équipe
    await resend.emails.send({
      from: "PodKids App <no-reply@podkids.app>",
      to: "hello@podkids.app",
      subject: "Nouvelle inscription !",
      html: `
        <div>
          <h1>Nouvelle inscription !</h1>
          <p>Email: ${email}</p>
          <p>Date: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Subscription successful" },

      { status: 200 }
    );
  } catch (error) {
    console.error("Error in subscription:", error);

    return NextResponse.json(
      { error: "Internal server error" },

      { status: 500 }
    );
  }
}

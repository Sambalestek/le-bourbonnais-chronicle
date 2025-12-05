import { Header } from "@/components/Header";
import { HeroArticle } from "@/components/HeroArticle";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeader } from "@/components/SectionHeader";
import { AgendaCard } from "@/components/AgendaCard";
import { PortraitCard } from "@/components/PortraitCard";
import { Footer } from "@/components/Footer";

import heroImage from "@/assets/hero-village.jpg";
import marketImage from "@/assets/market.jpg";
import mairieImage from "@/assets/mairie.jpg";
import vignobleImage from "@/assets/vignoble.jpg";
import portraitImage from "@/assets/portrait-farmer.jpg";
import chateauImage from "@/assets/chateau.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <HeroArticle
          category="À la Une"
          title="Le Bourbonnais, terre d'histoire et d'avenir"
          excerpt="Entre patrimoine millénaire et innovations rurales, découvrez comment notre région se réinvente tout en préservant son authenticité."
          author="Marie Dupont"
          date="5 décembre 2025"
          image={heroImage}
        />

        {/* Three featured articles */}
        <section className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard
              variant="default"
              category="Économie"
              title="Les circuits courts, moteur de l'économie locale"
              excerpt="De plus en plus de producteurs misent sur la vente directe."
              date="5 décembre 2025"
              image={marketImage}
            />
            <ArticleCard
              variant="default"
              category="Politique"
              title="Budget 2026 : les priorités de la communauté de communes"
              excerpt="Investissements majeurs prévus pour les infrastructures."
              date="4 décembre 2025"
              image={mairieImage}
            />
            <ArticleCard
              variant="default"
              category="Agriculture"
              title="Vendanges 2025 : un millésime d'exception en perspective"
              excerpt="Les vignerons du Saint-Pourçain célèbrent une récolte prometteuse."
              date="4 décembre 2025"
              image={vignobleImage}
            />
          </div>
        </section>

        {/* Main content grid */}
        <section className="container pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column */}
            <div className="lg:col-span-3">
              <SectionHeader title="À ne pas manquer" />
              <div className="space-y-0">
                <ArticleCard
                  variant="compact"
                  category="Société"
                  title="Le nouveau centre de santé ouvre ses portes à Moulins"
                  date="3 décembre 2025"
                />
                <ArticleCard
                  variant="compact"
                  category="Environnement"
                  title="Reforestation : 5000 arbres plantés ce mois-ci"
                  date="3 décembre 2025"
                />
                <ArticleCard
                  variant="compact"
                  category="Sports"
                  title="L'équipe locale de rugby en route pour les phases finales"
                  date="2 décembre 2025"
                />
                <ArticleCard
                  variant="compact"
                  category="Faits divers"
                  title="Vigilance météo : fortes pluies attendues ce week-end"
                  date="2 décembre 2025"
                />
              </div>
            </div>

            {/* Center column - Featured */}
            <div className="lg:col-span-6">
              <SectionHeader title="Culture & Patrimoine" href="#" />
              <ArticleCard
                variant="featured"
                category="Patrimoine"
                title="Le château des ducs de Bourbon : renaissance d'un joyau médiéval"
                excerpt="Après cinq ans de travaux, le château emblématique du Bourbonnais rouvre ses portes au public. Une restauration minutieuse qui révèle toute la splendeur de ce monument historique, témoin de l'histoire de France."
                author="Jean-Pierre Martin"
                date="5 décembre 2025"
                image={chateauImage}
              />
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <ArticleCard
                  variant="default"
                  category="Musique"
                  title="Festival Jazz en Bourbonnais : la programmation dévoilée"
                  date="4 décembre 2025"
                />
                <ArticleCard
                  variant="default"
                  category="Cinéma"
                  title="Le réalisateur local primé à Cannes de retour au pays"
                  date="3 décembre 2025"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-3">
              <SectionHeader title="Portraits" href="#" />
              <div className="space-y-4">
                <PortraitCard
                  name="Pierre Durand"
                  role="Agriculteur engagé"
                  excerpt="À 65 ans, il transmet son exploitation en bio à la nouvelle génération."
                  image={portraitImage}
                />
                <PortraitCard
                  name="Sophie Bernard"
                  role="Artisane céramiste"
                  excerpt="Elle perpétue la tradition potière du Bourbonnais avec modernité."
                  image={portraitImage}
                />
              </div>

              <SectionHeader title="Agenda" href="#" className="mt-8" />
              <div className="space-y-3">
                <AgendaCard
                  category="Marché"
                  title="Marché de Noël de Moulins"
                  date="7 décembre"
                  time="9h-18h"
                  location="Place de l'Allier"
                />
                <AgendaCard
                  category="Concert"
                  title="Chorale de l'Avent"
                  date="8 décembre"
                  time="20h30"
                  location="Église Saint-Pierre"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-secondary py-12">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Restez informé
            </h2>
            <p className="text-muted-foreground mb-6">
              Recevez chaque semaine les actualités du Bourbonnais directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-charcoal text-primary-foreground font-medium hover:bg-charcoal/90 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </section>

        {/* Bonnes adresses */}
        <section className="container py-12">
          <SectionHeader title="Bonnes adresses" href="#" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ArticleCard
              variant="horizontal"
              category="Restaurant"
              title="La Table du Bourbonnais"
              date="Cuisine traditionnelle"
              image={marketImage}
            />
            <ArticleCard
              variant="horizontal"
              category="Producteur"
              title="Ferme des Trois Vallées"
              date="Fromages & produits laitiers"
              image={vignobleImage}
            />
            <ArticleCard
              variant="horizontal"
              category="Hébergement"
              title="Gîte du Moulin"
              date="Charme rural"
              image={chateauImage}
            />
            <ArticleCard
              variant="horizontal"
              category="Balade"
              title="Sentier des vignobles"
              date="12 km • Facile"
              image={heroImage}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

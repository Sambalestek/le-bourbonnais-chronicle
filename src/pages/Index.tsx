import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
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

      <main className="container py-8">
        {/* Three column layout like The Atlantic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Stacked articles */}
          <div className="lg:col-span-3 lg:border-r lg:border-border lg:pr-8">
            <ArticleCard
              variant="standard"
              title="Les circuits courts, moteur de l'économie locale"
              author="Marie Dupont"
              credit="Photo par Jean Martin"
              image={marketImage}
            />
            <ArticleCard
              variant="standard"
              title="Budget 2026 : les priorités de la communauté de communes"
              author="Pierre Bernard"
              image={mairieImage}
            />
            <ArticleCard
              variant="list"
              title="Vigilance météo : fortes pluies attendues ce week-end"
              author="La rédaction"
            />
          </div>

          {/* Center Column - Featured article */}
          <div className="lg:col-span-5">
            <ArticleCard
              variant="featured"
              title="Le Bourbonnais, terre d'histoire et d'avenir"
              author="Jean-Pierre Martin"
              credit="Illustration par Sophie Durand"
              image={heroImage}
            />
            <p className="deck-text mt-4">
              Entre patrimoine millénaire et innovations rurales, notre région se réinvente tout en préservant son authenticité.
            </p>
          </div>

          {/* Right Column - Compact list */}
          <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
            <ArticleCard
              variant="compact"
              title="Vendanges 2025 : un millésime d'exception en perspective"
              author="François Leblanc"
              image={vignobleImage}
            />
            <ArticleCard
              variant="compact"
              title="Le château des ducs de Bourbon rouvre ses portes"
              author="Claire Moreau"
              image={chateauImage}
            />
            <ArticleCard
              variant="compact"
              title="Pierre Durand, 65 ans de passion agricole"
              author="Marie Dupont"
              image={portraitImage}
            />
            <ArticleCard
              variant="compact"
              title="Festival Jazz en Bourbonnais : la programmation dévoilée"
              author="Thomas Petit"
            />
            <ArticleCard
              variant="compact"
              title="Le nouveau centre de santé ouvre à Moulins"
              author="La rédaction"
            />
          </div>
        </div>

        {/* Section divider */}
        <div className="my-12 border-t border-border" />

        {/* Secondary content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ArticleCard
            variant="standard"
            title="Reforestation : 5000 arbres plantés ce mois-ci dans l'Allier"
            author="Émilie Rousseau"
            image={vignobleImage}
          />
          <ArticleCard
            variant="standard"
            title="L'équipe locale de rugby en route pour les phases finales"
            author="Lucas Martin"
            image={mairieImage}
          />
          <ArticleCard
            variant="standard"
            title="Marché de Noël de Moulins : rendez-vous le 7 décembre"
            author="La rédaction"
            image={marketImage}
          />
          <ArticleCard
            variant="standard"
            title="La Table du Bourbonnais, nouvelle étoile gastronomique"
            author="Sophie Bernard"
            image={heroImage}
          />
        </div>

        {/* Newsletter */}
        <div className="my-16 py-12 border-y border-border text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl italic mb-2">Restez informé</h2>
          <p className="text-muted-foreground mb-6">
            Recevez les actualités du Bourbonnais directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

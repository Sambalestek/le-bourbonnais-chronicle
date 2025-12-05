import { useParams, Link } from "react-router-dom";
import { ChevronRight, Clock, Share2, Facebook, Twitter, Bookmark } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ArticleCard } from "@/components/ArticleCard";
import heroImage from "@/assets/hero-village.jpg";
import marketImage from "@/assets/market.jpg";
import vignobleImage from "@/assets/vignoble.jpg";

const ArticlePage = () => {
  const { slug } = useParams();
  
  // Article data (would come from API in real app)
  const article = {
    category: "Patrimoine",
    subcategory: "Histoire",
    title: "Le Bourbonnais, terre d'histoire et d'avenir",
    excerpt: "Entre patrimoine millénaire et innovations rurales, notre région se réinvente tout en préservant son authenticité. Un voyage au cœur d'un territoire qui conjugue tradition et modernité.",
    author: "Jean-Pierre Martin",
    date: "5 décembre 2025",
    readTime: "8 min",
    image: heroImage,
    imageCaption: "Vue panoramique sur le village de Saint-Pourçain-sur-Sioule, joyau du Bourbonnais.",
    imageCredit: "Photo : Sophie Durand",
    content: [
      {
        type: "paragraph",
        text: "Le Bourbonnais, cette ancienne province française nichée au cœur de l'Auvergne, continue de fasciner par la richesse de son patrimoine et le dynamisme de ses habitants. Des châteaux médiévaux aux vignobles reconnus, chaque commune recèle des trésors qui témoignent d'un passé glorieux."
      },
      {
        type: "paragraph",
        text: "« Notre région a su préserver son authenticité tout en embrassant la modernité », confie Marie Dupont, présidente de l'Office de tourisme du Bourbonnais. « Les visiteurs viennent ici pour retrouver un art de vivre qui se fait rare ailleurs. »"
      },
      {
        type: "subheading",
        text: "Un patrimoine architectural exceptionnel"
      },
      {
        type: "paragraph",
        text: "Le château des ducs de Bourbon, récemment restauré, attire chaque année des milliers de visiteurs. Mais au-delà de ce monument emblématique, c'est tout un réseau de sites historiques qui maille le territoire : églises romanes, maisons à colombages, lavoirs et pigeonniers composent un paysage architectural unique en France."
      },
      {
        type: "paragraph",
        text: "Les communes ont su valoriser ce patrimoine. À Moulins, la cité ducale s'est transformée en véritable musée à ciel ouvert. À Vichy, l'architecture thermale du XIXe siècle côtoie désormais des initiatives contemporaines audacieuses."
      },
      {
        type: "subheading",
        text: "L'agriculture, pilier de l'économie locale"
      },
      {
        type: "paragraph",
        text: "Si le tourisme participe au rayonnement du Bourbonnais, l'agriculture reste le cœur battant de l'économie régionale. Les éleveurs de charolaises perpétuent une tradition séculaire, tandis que les viticulteurs de Saint-Pourçain produisent des vins qui gagnent en reconnaissance."
      },
      {
        type: "paragraph",
        text: "Les circuits courts se développent à grande vitesse. Marchés fermiers, AMAP et ventes directes permettent aux producteurs de valoriser leur travail tout en répondant aux attentes des consommateurs en quête d'authenticité."
      },
      {
        type: "subheading",
        text: "Des défis pour demain"
      },
      {
        type: "paragraph",
        text: "Le Bourbonnais fait face aux mêmes défis que de nombreux territoires ruraux : maintien des services publics, accès aux soins, désertification des centres-bourgs. Pourtant, des signaux encourageants émergent."
      },
      {
        type: "paragraph",
        text: "L'installation de jeunes agriculteurs reprend, portée par une nouvelle génération soucieuse de son environnement. Les télétravailleurs découvrent les charmes d'une vie au vert, à deux heures de Paris. Et les élus locaux multiplient les initiatives pour maintenir l'attractivité du territoire."
      },
      {
        type: "paragraph",
        text: "Le Bourbonnais a de beaux jours devant lui. Entre héritage et innovation, cette terre d'histoire écrit chaque jour un nouveau chapitre de son avenir."
      }
    ]
  };

  const relatedArticles = [
    {
      title: "Le château des ducs de Bourbon rouvre ses portes",
      author: "Claire Moreau",
      image: vignobleImage,
    },
    {
      title: "Les circuits courts, moteur de l'économie locale",
      author: "Marie Dupont",
      image: marketImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Ad banner top */}
      <div className="container mt-4">
        <AdPlaceholder variant="banner" />
      </div>

      <main className="container py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-burgundy">{article.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-burgundy">{article.subcategory}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <article className="lg:col-span-8">
            {/* Article header */}
            <header className="mb-8">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>
              
              {/* Author and meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm border-y border-border py-4">
                <div>
                  <span className="text-muted-foreground">Par </span>
                  <span className="font-medium text-foreground">{article.author}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <time className="text-muted-foreground">Publié le {article.date}</time>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
                
                {/* Share buttons */}
                <div className="flex items-center gap-2 ml-auto">
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Partager">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Sauvegarder">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </header>

            {/* Main image */}
            <figure className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full aspect-[16/9] object-cover"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">
                {article.imageCaption} <span className="italic">{article.imageCredit}</span>
              </figcaption>
            </figure>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((block, index) => {
                if (block.type === "subheading") {
                  return (
                    <h2 key={index} className="font-serif text-2xl text-foreground mt-10 mb-4">
                      {block.text}
                    </h2>
                  );
                }
                
                // Insert inline ad after 3rd paragraph
                if (block.type === "paragraph" && index === 3) {
                  return (
                    <div key={index}>
                      <p className="text-foreground/90 leading-relaxed mb-6">{block.text}</p>
                      <AdPlaceholder variant="inline" />
                    </div>
                  );
                }
                
                return (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {["Bourbonnais", "Patrimoine", "Agriculture", "Tourisme", "Allier"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-cream-light text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-4 space-y-8">
              {/* Ad sidebar */}
              <AdPlaceholder variant="sidebar" />

              {/* Related articles */}
              <div>
                <h3 className="font-serif text-lg border-b-2 border-burgundy pb-2 mb-4">
                  À lire aussi
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((item) => (
                    <ArticleCard
                      key={item.title}
                      variant="compact"
                      title={item.title}
                      author={item.author}
                      image={item.image}
                    />
                  ))}
                </div>
              </div>

              {/* Second ad */}
              <AdPlaceholder variant="sidebar" />

              {/* Newsletter box */}
              <div className="bg-cream-light p-6">
                <h3 className="font-serif text-lg mb-2">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recevez l'essentiel de l'actualité bourbonnaise.
                </p>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-3 py-2 text-sm border border-cream bg-background mb-3"
                />
                <button className="w-full py-2 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom related articles */}
        <section className="mt-16 pt-8 border-t border-border">
          <h2 className="font-serif text-2xl mb-8">Sur le même sujet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard
              variant="standard"
              title="Vendanges 2025 : un millésime d'exception en perspective"
              author="François Leblanc"
              image={vignobleImage}
            />
            <ArticleCard
              variant="standard"
              title="Les circuits courts, moteur de l'économie locale"
              author="Marie Dupont"
              image={marketImage}
            />
            <ArticleCard
              variant="standard"
              title="Le château des ducs de Bourbon rouvre ses portes"
              author="Claire Moreau"
              image={heroImage}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;

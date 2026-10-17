import Photo from "../components/Photo";
import OpenBadge from "../components/OpenBadge";
import Logo from "../components/Logo";
import { searchPhoto } from "../lib/pexels";
import { heroQuery, bannerQuery, storyQueries, menu, reviews } from "../lib/data";

export default async function Home() {
  // Fetch every photo in parallel on the server. Missing keys or failed requests return null.
  const [hero, banner, ...story] = await Promise.all([
    searchPhoto(heroQuery, "portrait"),
    searchPhoto(bannerQuery),
    ...storyQueries.map((q) => searchPhoto(q)),
  ]);
  const menuPhotos = await Promise.all(menu.map((m) => searchPhoto(m.query)));

  return (
    <>
      <div className="bar">
        <div className="wrap barin">
          <Logo />
          <nav aria-label="Main">
            <a href="#menu">Menu</a><a href="#about">Our story</a><a href="#reviews">Reviews</a>
            <a className="btn small" href="#visit">Visit us</a>
          </nav>
        </div>
      </div>

      <main id="top">
        <div className="wrap hero">
          <div>
            <OpenBadge />
            <h1>Strong chai and small plates, made fresh all day.</h1>
            <p>A neighbourhood tea shop with whole-spice chai, fried-to-order snacks and plum cake from our own oven.</p>
            <a className="btn" href="#menu">See the menu</a>
            <a className="btn alt" href="#visit">Find us</a>
            <div className="stats">
              <div><b>12 yrs</b><span>serving the street</span></div>
              <div><b>400+</b><span>cups every day</span></div>
              <div><b>4.8 ★</b><span>from regulars</span></div>
            </div>
          </div>
          <Photo className="hero-photo" src={hero?.src} alt={hero?.alt || "A glass of masala chai"} emoji="☕" priority sizes="(max-width: 820px) 90vw, 480px" />
        </div>

        <section id="menu" className="tint">
          <div className="wrap">
            <div className="head"><h2>Today&apos;s menu</h2><p>Every cup is brewed to order. Snacks come out in small batches.</p></div>
            <div className="cards">
              {menu.map((m, i) => (
                <article className="card" key={m.name}>
                  <Photo className="thumb" src={menuPhotos[i]?.src} alt={menuPhotos[i]?.alt || m.name} emoji={m.emoji} tone={m.tone} sizes="(max-width: 600px) 90vw, 260px" />
                  <div className="body">
                    <h3>{m.name} <span>₹{m.price}</span></h3>
                    <p>{m.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap about">
            <div>
              <h2>One stove, a few stools, and a lot of tea.</h2>
              <p>Chaya Corner opened as a single stove on a busy corner. We still boil every cup with fresh milk and whole spices, the slow way.</p>
              <p>Our snacks are made in small batches through the day, so what you eat is never more than an hour old.</p>
              <a className="btn" href="#visit">Come say hello</a>
            </div>
            <div className="pics">
              {[0, 1, 2, 3].map((i) => (
                <Photo key={i} src={story[i]?.src} alt={story[i]?.alt || "Chaya Corner"} emoji={["☕", "🥟", "🍌", "🫖"][i]} tone={`t${i + 1}`} sizes="(max-width: 820px) 45vw, 260px" />
              ))}
            </div>
          </div>
        </section>

        <div className="banner-wrap">
          <Photo className="banner-photo" src={banner?.src} alt={banner?.alt || ""} emoji="" tone="t5" sizes="100vw" />
          <div className="banner-text">
            <h2>Come for the chai. Stay for the company.</h2>
            <p>Open every day, 7 am to 7 pm.</p>
          </div>
        </div>

        <section id="reviews" className="tint">
          <div className="wrap">
            <div className="head"><h2>What regulars say</h2></div>
            <div className="quotes">
              {reviews.map((r) => (
                <div className="q" key={r.name}>
                  <div className="stars" aria-label={`${r.stars} stars`}>{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
                  <p>{r.text}</p><b>{r.name}</b><small>{r.note}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visit">
          <div className="wrap">
            <div className="visit">
              <div><h3>Address</h3><p>12 Market Road, Main Junction</p><p>Sample Town, Kerala</p></div>
              <div><h3>Hours</h3><table><tbody>
                <tr><td>Monday to Saturday</td><td>7 am – 7 pm</td></tr>
                <tr><td>Sunday</td><td>7 am – 7 pm</td></tr>
              </tbody></table></div>
              <div><h3>Order ahead</h3><p>Message us for bulk and party orders.</p>
                <p><a className="btn" href="https://wa.me/910000000000">Message on WhatsApp</a></p></div>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="wrap foot"><Logo className="foot-logo" /><span>© 2026 Chaya Corner · Sample website design</span></div></footer>
    </>
  );
}

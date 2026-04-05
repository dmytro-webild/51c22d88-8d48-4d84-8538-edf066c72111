"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Star, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Over Ons",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MOOSE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="MOOSE"
      description="Ervaar de perfecte balans tussen pure smaken, verfijnde techniek en een warme, moderne ambiance. Welkom in het hart van Oostende."
      testimonials={[
        {
          name: "Thomas V.",
          handle: "@t_vanden",
          testimonial: "De meest verfijnde keuken die ik in jaren heb geproefd. Een absolute aanrader!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
        },
        {
          name: "Sarah D.",
          handle: "@sarah_d",
          testimonial: "Een geweldige ervaring van begin tot eind. De service en het eten zijn onberispelijk.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-woman-sitting-cafe-eating-tasty-pie_285396-1088.jpg",
        },
        {
          name: "Marc B.",
          handle: "@marc_b",
          testimonial: "Geweldige ambiance en fantastische gerechten. MOOSE is een vaste waarde geworden.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-enjoying-food-restaurant_23-2149269185.jpg",
        },
        {
          name: "Elena K.",
          handle: "@elena_k",
          testimonial: "Een culinaire parel aan de kust. De smaken zijn verrassend en gedurfd.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-smiling-woman-with-collected-hair-wearing-white-shirt_291650-656.jpg",
        },
        {
          name: "Joris H.",
          handle: "@joris_h",
          testimonial: "Super service en heerlijke wijnkaart. Ik kom zeker terug.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-enjoying-dinner-party_52683-132626.jpg",
        },
      ]}
      buttons={[
        {
          text: "Reserveer Nu",
          href: "#contact",
        },
        {
          text: "Ontdek Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-african-american-business-woman-streets-city_627829-3510.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
          alt: "Thomas V.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-stylish-woman-sitting-cafe-eating-tasty-pie_285396-1088.jpg",
          alt: "Sarah D.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/person-enjoying-food-restaurant_23-2149269185.jpg",
          alt: "Marc B.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-smiling-woman-with-collected-hair-wearing-white-shirt_291650-656.jpg",
          alt: "Elena K.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-friends-enjoying-dinner-party_52683-132626.jpg",
          alt: "Joris H.",
        },
      ]}
      avatarText="Bekroond door fijnproevers"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Het Concept"
      title="Onze Filosofie bij MOOSE"
      buttons={[
        {
          text: "Meer Lezen",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Voorgerecht",
          name: "Handgesneden Rundstartaar",
          price: "€18",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-eggplant-with-tomato-chopped-green-onions-rag-round-white-plate_176474-3356.jpg",
          reviewCount: "120",
        },
        {
          id: "2",
          brand: "Voorgerecht",
          name: "Noordzee Zeeuwse Oesters",
          price: "€22",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-fish-meal_23-2148494083.jpg",
          reviewCount: "85",
        },
        {
          id: "3",
          brand: "Hoofdgerecht",
          name: "Gegrilde Zeebaars",
          price: "€32",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/slice-cake-with-cocoa-cookies-white-plate_114579-19145.jpg",
          reviewCount: "94",
        },
        {
          id: "4",
          brand: "Hoofdgerecht",
          name: "Hertenfilet met Rode Wijn",
          price: "€36",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-vegetables-salad-bowl-with-rustic-old-wooden-background_1150-1835.jpg",
          reviewCount: "110",
        },
        {
          id: "5",
          brand: "Nagerecht",
          name: "Pure Chocolade Mousse",
          price: "€12",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-grilled-lamb-meat-with-sauce-lettuce-red-cabbage-tomato-pita_141793-3637.jpg",
          reviewCount: "205",
        },
        {
          id: "6",
          brand: "Nagerecht",
          name: "Citrus & Basilicum Sorbet",
          price: "€10",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/cracker-cake-inside-green-plate-with-nougat-chocolate-cake-cream_140725-29930.jpg",
          reviewCount: "78",
        },
      ]}
      title="Proef het Menu"
      description="Elk bord vertelt een verhaal. Ontdek onze seizoensgebonden creaties."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="MOOSE in cijfers"
      description="Wat onze gasten zo waarderen aan onze culinaire ervaring."
      metrics={[
        {
          id: "1",
          icon: Star,
          title: "Gemiddelde beoordeling",
          value: "4.9/5",
        },
        {
          id: "2",
          icon: Users,
          title: "Tevreden gasten",
          value: "1500+",
        },
        {
          id: "3",
          icon: Utensils,
          title: "Bereide gerechten",
          value: "12k+",
        },
        {
          id: "4",
          icon: Award,
          title: "Jaren ervaring",
          value: "15",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Reserveer je tafel"
      description="Heb je vragen of wil je een tafel reserveren? Vul het formulier in en we nemen zo snel mogelijk contact op."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Je naam",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "E-mailadres",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Telefoonnummer",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Aantal personen, datum en tijd...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-pregnancy-young-family-pregnant-woman-man-happy-couple-wife-husband_1328-5073.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "Zeedijk 123, Oostende",
              href: "#",
            },
            {
              label: "info@moose-oostende.be",
              href: "mailto:info@moose-oostende.be",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
        {
          title: "Info",
          items: [
            {
              label: "Privacybeleid",
              href: "#",
            },
            {
              label: "Vacatures",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 MOOSE Restaurant"
      bottomRightText="Crafted by Webild"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

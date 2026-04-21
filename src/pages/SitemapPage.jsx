import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Bed,
  Briefcase,
  Building,
  Building2,
  ChevronRight,
  FileText,
  HelpCircle,
  Home,
  Info,
  Key,
  MessageCircle,
  Phone,
  ShieldCheck,
  Trees,
  User,
  Zap,
} from 'lucide-react';
import './SitemapPage.css';

const LogoSmile = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9.5 22V16.5h5V22" />
  </svg>
);

const SitemapActionCard = ({ item }) => {
  const Icon = item.icon;
  const content = (
    <>
      <div className="sitemap-feature-icon">
        <Icon size={20} />
      </div>
      <div className="sitemap-feature-copy">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <span className="sitemap-feature-link">
        {item.actionLabel}
        <ArrowUpRight size={16} />
      </span>
    </>
  );

  if (item.kind === 'action') {
    return (
      <button type="button" className="sitemap-feature-card" onClick={item.onClick}>
        {content}
      </button>
    );
  }

  return (
    <Link className="sitemap-feature-card" to={item.to}>
      {content}
    </Link>
  );
};

const SitemapLinkCard = ({ item }) => {
  const Icon = item.icon;
  const content = (
    <>
      <div className="sitemap-link-icon">
        <Icon size={18} />
      </div>
      <div className="sitemap-link-copy">
        <span className="sitemap-link-title">{item.title}</span>
        <span className="sitemap-link-description">{item.description}</span>
      </div>
      <ArrowUpRight size={16} className="sitemap-link-arrow" />
    </>
  );

  if (item.kind === 'action') {
    return (
      <button type="button" className="sitemap-link-card sitemap-link-card-action" onClick={item.onClick}>
        {content}
      </button>
    );
  }

  return (
    <Link className="sitemap-link-card" to={item.to}>
      {content}
    </Link>
  );
};

const SitemapPage = ({ onChatClick, onLoginClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featureCards = [
    {
      title: 'Explore active listings',
      description: 'Jump into the main property feed and start browsing without digging through menus.',
      actionLabel: 'Browse homes',
      icon: Home,
      kind: 'route',
      to: '/category/1',
    },
    {
      title: 'Talk to support',
      description: 'Open chat instantly if you need help with navigation, listings, or account questions.',
      actionLabel: 'Open chat',
      icon: MessageCircle,
      kind: 'action',
      onClick: onChatClick,
    },
    {
      title: 'Promote your property',
      description: 'Go from browsing to posting with the fastest route into the seller flow.',
      actionLabel: 'Post property',
      icon: Zap,
      kind: 'action',
      onClick: () => onLoginClick?.('post'),
    },
  ];

  const sections = [
    {
      id: 'property-categories',
      title: 'Property Categories',
      description: 'Main listing destinations that are already wired into the current frontend.',
      icon: Home,
      links: [
        {
          title: 'Houses for Sale',
          description: 'Family homes, villas, and residential properties.',
          icon: Home,
          kind: 'route',
          to: '/category/1',
        },
        {
          title: 'Land for Sale',
          description: 'Plots, investment land, and development-ready blocks.',
          icon: Trees,
          kind: 'route',
          to: '/category/2',
        },
        {
          title: 'Apartments for Sale',
          description: 'City apartments, condos, and modern units.',
          icon: Building2,
          kind: 'route',
          to: '/category/3',
        },
        {
          title: 'Houses for Rent',
          description: 'Rental homes for short and long stays.',
          icon: Key,
          kind: 'route',
          to: '/category/4',
        },
        {
          title: 'Apartment Rentals',
          description: 'Move-in-ready apartments and urban rentals.',
          icon: Bed,
          kind: 'route',
          to: '/category/5',
        },
        {
          title: 'Commercial Property',
          description: 'Office, retail, and mixed-use business spaces.',
          icon: Building,
          kind: 'route',
          to: '/category/6',
        },
      ],
    },
    {
      id: 'seller-tools',
      title: 'Seller Tools',
      description: 'Pages focused on growing visibility, speeding up enquiries, and boosting conversions.',
      icon: Zap,
      links: [
        {
          title: 'Sell Fast',
          description: 'See how to move listings faster with the platform.',
          icon: Zap,
          kind: 'route',
          to: '/sell-fast',
        },
        {
          title: 'Membership',
          description: 'Review premium packages and seller advantages.',
          icon: User,
          kind: 'route',
          to: '/membership',
        },
        {
          title: 'Banner Ads',
          description: 'Promotional space for high-visibility advertising.',
          icon: Building2,
          kind: 'route',
          to: '/banner-ads',
        },
        {
          title: 'Boost Ad',
          description: 'Push an existing listing higher in the marketplace.',
          icon: ArrowUpRight,
          kind: 'route',
          to: '/boost-ad',
        },
      ],
    },
    {
      id: 'help-and-safety',
      title: 'Help and Safety',
      description: 'Support channels and trust resources for buyers, renters, and advertisers.',
      icon: HelpCircle,
      links: [
        {
          title: 'FAQs',
          description: 'Quick answers to the most common platform questions.',
          icon: HelpCircle,
          kind: 'route',
          to: '/faqs',
        },
        {
          title: 'Stay Safe',
          description: 'Guides for spotting scams and transacting more safely.',
          icon: ShieldCheck,
          kind: 'route',
          to: '/stay-safe',
        },
        {
          title: 'Contact Us',
          description: 'Reach the team through the main support page.',
          icon: Phone,
          kind: 'route',
          to: '/contact-us',
        },
        {
          title: 'Live Chat',
          description: 'Open the in-app support chat without leaving this page.',
          icon: MessageCircle,
          kind: 'action',
          onClick: onChatClick,
        },
      ],
    },
    {
      id: 'company',
      title: 'Company',
      description: 'Pages that explain who idamata is, what we do, and how the business is growing.',
      icon: Info,
      links: [
        {
          title: 'About Us',
          description: 'Platform story, mission, and marketplace direction.',
          icon: Info,
          kind: 'route',
          to: '/about-us',
        },
        {
          title: 'Careers',
          description: 'Opportunities to work with the idamata team.',
          icon: Briefcase,
          kind: 'route',
          to: '/careers',
        },
      ],
    },
    {
      id: 'legal',
      title: 'Legal and Policies',
      description: 'Important reading for privacy, platform rules, and account responsibilities.',
      icon: ShieldCheck,
      links: [
        {
          title: 'Terms and Conditions',
          description: 'Core platform rules and user responsibilities.',
          icon: FileText,
          kind: 'route',
          to: '/terms-and-conditions',
        },
        {
          title: 'Privacy Policy',
          description: 'How user data is collected, used, and protected.',
          icon: ShieldCheck,
          kind: 'route',
          to: '/privacy-policy',
        },
      ],
    },
  ];

  const livePageCount = sections.reduce(
    (count, section) => count + section.links.filter((item) => item.kind === 'route').length,
    0,
  );

  const stats = [
    { value: sections.length, label: 'Sitemap groups' },
    { value: livePageCount, label: 'Live routes' },
    { value: featureCards.length, label: 'Quick actions' },
  ];

  return (
    <div className="layout sitemap-page">
      <header className="header" style={{ background: '#009f7f' }}>
        <div className="container nav">
          <div className="nav-left">
            <Link to="/" className="logo" style={{ color: '#fff' }}>
              <LogoSmile size={28} />
              <span className="logo-text">idamata</span>
            </Link>
            <Link to="/all-ads" className="nav-all-ads" style={{ color: '#fff' }}>
              All ads
            </Link>
          </div>

          <div className="nav-right">
            <button onClick={onChatClick} className="nav-action-btn" style={{ color: '#fff' }}>
              <MessageCircle size={18} strokeWidth={2.5} />
              <span>Chat</span>
            </button>
            <button onClick={onLoginClick} className="nav-action-btn" style={{ color: '#fff' }}>
              <User size={18} strokeWidth={2.5} />
              <span>Login</span>
            </button>
            <button
              onClick={() => onLoginClick?.('post')}
              className="post-ad-btn"
              style={{
                backgroundColor: '#ffcc00',
                color: '#000',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '1rem',
              }}
            >
              POST YOUR PROPERTY
            </button>
          </div>
        </div>
      </header>

      <main className="sitemap-content">
        <div className="container sitemap-shell">
          <section className="sitemap-hero-card">
            <div className="sitemap-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} />
              <span>Sitemap</span>
            </div>

            <div className="sitemap-hero-grid">
              <div className="sitemap-hero-copy">
                <span className="sitemap-eyebrow">Route map</span>
                <h1>Sitemap</h1>
                <p>
                  Every shortcut on this page points to a live destination already available in the current
                  idamata frontend. Use it as a clean overview of buying, selling, support, company, and
                  policy pages.
                </p>

                <nav className="sitemap-jump-links" aria-label="Jump to sitemap sections">
                  {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className="sitemap-jump-chip">
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="sitemap-stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="sitemap-stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="sitemap-feature-grid" aria-label="Quick sitemap actions">
            {featureCards.map((item) => (
              <SitemapActionCard key={item.title} item={item} />
            ))}
          </section>

          <section className="sitemap-sections">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article key={section.id} id={section.id} className="sitemap-section-card">
                  <div className="sitemap-section-head">
                    <div className="sitemap-section-title-wrap">
                      <div className="sitemap-section-icon">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="sitemap-section-label">Section</span>
                        <h2>{section.title}</h2>
                      </div>
                    </div>

                    <div className="sitemap-section-meta">
                      <span>{section.links.length} shortcuts</span>
                      <p>{section.description}</p>
                    </div>
                  </div>

                  <div className="sitemap-link-grid">
                    {section.links.map((item) => (
                      <SitemapLinkCard key={item.title} item={item} />
                    ))}
                  </div>
                </article>
              );
            })}
          </section>

          <section className="sitemap-support-band">
            <div className="sitemap-support-copy">
              <span className="sitemap-eyebrow">Need a hand?</span>
              <h2>Use the fastest path back to help, chat, or the home feed.</h2>
              <p>
                The sitemap is meant to reduce hunting around the interface. These shortcuts are here for the
                moments when you want the next step immediately.
              </p>
            </div>

            <div className="sitemap-support-grid">
              <Link className="sitemap-support-card" to="/contact-us">
                <Phone size={22} />
                <div>
                  <span>Contact page</span>
                  <small>Open the main support hub</small>
                </div>
              </Link>

              <button type="button" className="sitemap-support-card" onClick={onChatClick}>
                <MessageCircle size={22} />
                <div>
                  <span>Live chat</span>
                  <small>Start a conversation instantly</small>
                </div>
              </button>

              <Link className="sitemap-support-card" to="/">
                <Home size={22} />
                <div>
                  <span>Homepage</span>
                  <small>Return to the main browsing experience</small>
                </div>
              </Link>

              <Link className="sitemap-support-card" to="/privacy-policy">
                <ShieldCheck size={22} />
                <div>
                  <span>Privacy policy</span>
                  <small>Review data and communication details</small>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SitemapPage;

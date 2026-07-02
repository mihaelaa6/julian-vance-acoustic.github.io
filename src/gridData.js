export const gridData = [
  {
    id: "hero-profile",
    gridArea: "span 2 / span 2", // Large 2x2 main focus card
    layoutType: "hero",
    portfolioContent: {
      title: "Julian Vance",
      subtitle: "Concert Violinist & Pianist bridging classical mastery with modern ambient orchestration. Moving between the keys and the strings to capture the cinematic texture of sound.",
      meta: "📍 Based in Los Angeles, CA // Touring Globally"
    },
    companyContent: {
      title: "Booking & Management Hub",
      subtitle: "Securing premium bookings, brand alignments, and international symphonic placements for Julian Vance's 2026/2027 season portfolio.",
      meta: "Represented by Vance Arts Management Group"
    }
  },
  {
    id: "instrument-focus",
    gridArea: "span 1 / span 1", // 1x1 block
    layoutType: "metric",
    portfolioContent: { title: "Dual Mastery", value: "Strings & Keys", label: "Custom 1894 Italian Violin // Steinway Model D Concert Grand" },
    companyContent: { title: "Performance Draw", value: "85K+", label: "Avg. global monthly listeners across ambient acoustic streaming playlists" }
  },
  {
    id: "live-event-tracker",
    gridArea: "span 1 / span 1", // 1x1 block
    layoutType: "metric",
    portfolioContent: { title: "Next Active Venue", value: "Symphony Hall", label: "Live performance featuring the custom dual-instrument ambient set." },
    companyContent: { title: "Booking Yield", value: "94%", label: "Of available 2026 tour venue dates are locked down and finalized." }
  },
  {
    id: "concert-list",
    gridArea: "span 1 / span 3", // Wide 1x3 horizontal block spanning the entire bottom row
    layoutType: "eventsList",
    portfolioContent: {
      title: "Upcoming Concert Experiences",
      events: [
        { date: "Oct 14, 2026", city: "London, UK", stage: "Royal Albert Hall", detail: "Acoustic Solo Strings & Grand Piano Showcase" },
        { date: "Nov 02, 2026", city: "New York, NY", stage: "Carnegie Hall", detail: "Cinematic Neo-Classical Ambient Ensemble Session" },
        { date: "Dec 18, 2026", city: "Tokyo, JP", stage: "Suntory Hall", detail: "Winter Solstice Symphony Collaboration" }
      ]
    },
    companyContent: {
      title: "Manager Logistics & Booking Queue",
      events: [
        { date: "Contract Pending", city: "Paris, FR", stage: "Philharmonie de Paris", detail: "Awaiting final escrow authorization" },
        { date: "Hold Date", city: "Berlin, DE", stage: "Berliner Philharmonie", detail: "Sponsorship tier verification routing" },
        { date: "Hold Date", city: "Vienna, AT", stage: "Musikverein", detail: "Acoustic layout and travel manifest checkout" }
      ]
    }
  }
];
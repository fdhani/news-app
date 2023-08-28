import { ArticleListInterface } from "../../models/repository/get-article-list";

const getArticleList = (): ArticleListInterface => ({
  status: "ok",
  totalResults: 37,
  articles: [
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Charlotte Yang",
      title:
        "China Cuts Tax on Stock Trading to Boost Market Confidence - Bloomberg",
      description:
        "China lowered the stamp duty on stock trades for the first time since 2008, marking a major attempt to restore confidence in the world’s second-largest equity market.",
      url: "https://www.bloomberg.com/news/articles/2023-08-27/china-cuts-tax-on-stock-trading-to-boost-market-confidence",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iR2p.3T5Xgpc/v1/1200x800.jpg",
      publishedAt: "2023-08-27T09:25:43Z",
      content:
        "Sign up for Next China, a weekly email on where the nation stands now and where it's going next.\r\nChina lowered the stamp duty on stock trades for the first time since 2008, marking a major attempt t… [+63 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Lyric Li, Annabelle Timsit",
      title:
        "Ukraine live briefing: Lukashenko says he warned Prigozhin about safety; U.S. looking into crash's cause - The Washington Post",
      description:
        "Belarusian President Alexander Lukashenko claimed he had offered Wagner chief Yevgeniy Prigozhin “full security” before his presumed death last week.",
      url: "https://www.washingtonpost.com/world/2023/08/27/russia-ukraine-war-news/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/V74GJZGP65Q35AJ6IRVVJBG474_size-normalized.jpg&w=1440",
      publishedAt: "2023-08-27T08:23:46Z",
      content:
        "Belarusian President Alexander Lukashenko said he had warned Wagner Group leader Yevgeniy Prigozhin about his safety at least twice, Belarusian state news agency BelTA reported, as questions remain o… [+5203 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author:
        "Heather Chen, Brad Lendon, Angus Watson, Jake Kwon, Irene Nasser",
      title:
        "23 US Marines injured as Osprey aircraft crashes during military exercise in Australia - CNN",
      description:
        "Three US Marines have been killed and several others seriously wounded after an Osprey aircraft crashed during military exercises in Australia, officials said Sunday.",
      url: "https://www.cnn.com/2023/08/27/asia/aircraft-incident-us-defense-personnel-australia-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230826223217-osprey-aircraft-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-27T08:01:00Z",
      content:
        "Three US Marines have been killed and several others seriously wounded after an Osprey aircraft crashed during military exercises in Australia, officials said Sunday.\r\nOf the 23 Marines on board the … [+3349 chars]",
    },
    {
      source: {
        id: null,
        name: "Chicago Tribune",
      },
      author: "Tarot Astrologers",
      title: "Daily horoscope for August 27, 2023 - Chicago Tribune",
      description:
        "Check out your daily horoscope here, provided by Tarot astrologers.",
      url: "https://www.chicagotribune.com/horoscopes/sns-daily-horoscopes-08272023-20230827-ivmnxhw5tjhofkbftmkdhgwboe-story.html",
      urlToImage:
        "https://www.chicagotribune.com/resizer/wTsrdLN5g_PkNrvYJtMZd6CpStI=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/2XWTZZQLK5A6XLZ3X2KE34J2K4.jpg",
      publishedAt: "2023-08-27T06:00:00Z",
      content:
        "Creatively getting around obstacles could be necessary throughout the day. The potent Sun opposes suppressive Saturn at 4:28 am EDT, weakening our basic life force. Even so, as action-oriented Mars l… [+6573 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Carly Thomas",
      title:
        "Arleen Sorkin, Original Voice of Harley Quinn and ‘Days of Our Lives’ Actress, Dies at 67 - Hollywood Reporter",
      description:
        "James Gunn and Mark Hamill paid tribute to Sorkin, who first played the wisecracking DC comics character in 1992.",
      url: "https://www.hollywoodreporter.com/tv/tv-news/arleen-sorkin-dead-days-of-our-lives-harley-quinn-voice-1235575529/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/Arleen-Sorkin-obit-template-everett-H-2023.jpg?w=1024",
      publishedAt: "2023-08-27T05:25:17Z",
      content:
        "Arleen Sorkin, who portrayed Calliope Jones on the NBC soap opera Days of Our Lives and served as the original voice of the DC Comics character Harley Quinn, had died. She was 67.\r\nSorkin died Thursd… [+3156 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Haiti gang opens fire on protesters in capital, killing seven - BBC",
      description:
        "Soaring gang violence in Haiti has left more than 2,400 people dead in 2023 alone.",
      url: "https://www.bbc.com/news/world-latin-america-66631188",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/152B5/production/_129490768_haiticop.jpg",
      publishedAt: "2023-08-27T04:58:41Z",
      content:
        "A gang in Haiti has shot and killed at least seven people who were marching in a big protest organised by a church leader.\r\nHundreds of parishioners, some armed with machetes, marched through a subur… [+2218 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "HYUNG-JIN KIM",
      title:
        "North Korea to allow its citizens abroad to return home, a sign of further easing of pandemic curbs - Yahoo News",
      description:
        "North Korea said Sunday it will allow its citizens staying abroad to return home in line with easing pandemic situations worldwide, as the country slowly...",
      url: "https://news.yahoo.com/north-korea-allow-citizens-abroad-041725727.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/aqd91g9pCkWAcG0FIl14EQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/295e657e881aded4f221e3ae27b35831",
      publishedAt: "2023-08-27T04:17:00Z",
      content:
        "SEOUL, South Korea (AP) North Korea said Sunday it will allow its citizens staying abroad to return home in line with easing pandemic situations worldwide, as the country slowly eases its draconian c… [+2737 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Paul Myerberg",
      title:
        "College football Week 0 winners, losers: USC, Notre Dame, UMass, Navy - USA TODAY",
      description:
        "College football is finally back! USA TODAY Sports' Paul Myerberg sifts through the winners and losers of Week 0.",
      url: "https://www.usatoday.com/story/sports/ncaaf/2023/08/27/college-football-week-0-winners-losers-usc-notre-dame-navy/70692458007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/27/USAT/70693839007-usatsi-21285029.jpg?crop=3582,2023,x0,y0&width=3200&height=1808&format=pjpg&auto=webp",
      publishedAt: "2023-08-27T04:14:56Z",
      content:
        "The list of the biggest winners from Week 0 of the 2023 college football season begins with the residents of Earth. We've waited a long time for college football to come back, folks, through cold win… [+5127 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Cydney Henderson",
      title:
        "Aaron Rodgers connects with WR Garrett Wilson for touchdown in Jets debut - USA TODAY",
      description:
        "Aaron Rodgers' first drive as a Jet resulted in a punt, but he connected with Garrett Wilson for a TD in their second series against the Giants.",
      url: "https://www.usatoday.com/story/sports/nfl/jets/2023/08/26/aaron-rodgers-jets-debut-garrett-wilson-touchdown/70690954007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/26/USAT/70692187007-usatsi-21282913.jpg?crop=4402,2489,x0,y100&width=3200&height=1810&format=pjpg&auto=webp",
      publishedAt: "2023-08-27T03:33:59Z",
      content:
        "Aaron Rodgers last appeared in a preseason game in 2018 as a member of the Green Bay Packers. Five years later, the four-time MVP stepped on the field in the New York Jets' preseason finale in green … [+2133 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jillian Sykes",
      title:
        "Honoring the legacy of game show host and activist Bob Barker - CNN",
      description:
        "For over thirty years, Bob Barker was known and loved as the host of the hit game show “The Price is Right.” He famously ended each episode telling viewers to spay or neuter their pets. Barker spent decades giving his time and money to better the lives of cre…",
      url: "https://www.cnn.com/2023/08/26/us/iyw-bob-barker-legacy-article/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221122123415-02-bob-hope-legacy.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-27T03:28:00Z",
      content:
        "For over thirty years, Bob Barker was known and loved as the host of the hit game show The Price is Right. He famously ended each episode telling viewers to spay or neuter their pets. Barker spent de… [+2470 chars]",
    },
    {
      source: {
        id: null,
        name: "WFAA.com",
      },
      author: "Jesse Hawila",
      title: "Tracking Tropical Depression 10's hurricane potential - WFAA.com",
      description:
        "Tropical Depression 10, which just started to form in the Gulf of Mexico, is expected to make landfall in Florida as Hurricane Idalia by the middle of next week.",
      url: "https://www.wfaa.com/article/weather/tropical-depression-ten-gulf-of-mexico-storm-hurricane-idalia-florida/287-729699e6-682c-4c68-a51f-cdf1473e39ea",
      urlToImage:
        "https://media.wfaa.com/assets/WFAA/images/db35e9cd-235c-4b56-88dd-e57960cef75a/db35e9cd-235c-4b56-88dd-e57960cef75a_1140x641.jpg",
      publishedAt: "2023-08-27T03:22:00Z",
      content:
        "FLORIDA, USA On Saturday afternoon, a mess of thunderstorms near Cancun, Mexico, became organized enough to become designated as Tropical Depression Ten. \r\nAll signs point to this depression strength… [+469 chars]",
    },
    {
      source: {
        id: null,
        name: "The Phinsider",
      },
      author: "Kevin Nogle",
      title:
        "Daewood Davis injury ends Dolphins vs. Jaguars preseason game early - The Phinsider",
      description:
        "A head injury to wide receiver Daewood Davis led to the end of Miami’s game against Jacksonville when the rookie was taken to the hospital.",
      url: "https://www.thephinsider.com/miami-dolphins-injuries/2023/8/26/23847565/miami-dolphins-injury-update-daewood-davis-jacksonville-jaguars-preseason-week-3",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/o9Z_pc0oKHscVjAsvYj6mXzKL-c=/0x587:3741x2546/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24876368/1630110548.jpg",
      publishedAt: "2023-08-27T03:09:50Z",
      content:
        "Miami Dolphins rookie wide receiver Daewood Davis appeared to be knocked unconscious with 8:32 remaining in the teams 2023 Preseason Week 3 game against the Jacksonville Jaguars on Saturday. On a 3rd… [+3652 chars]",
    },
    {
      source: {
        id: null,
        name: "Spaceflight Now",
      },
      author: null,
      title:
        "SpaceX Falcon 9 launches 22 Starlink satellites from Cape Canaveral – Spaceflight Now - Spaceflight Now",
      description: null,
      url: "https://spaceflightnow.com/2023/08/26/live-coverage-spacex-falcon-9-to-launch-22-starlink-satellites-from-cape-canaveral/",
      urlToImage: null,
      publishedAt: "2023-08-27T03:00:00Z",
      content:
        "SpaceX launches 22 Starlink satellites from Cape Canaveral on Saturday, Aug. 26, 2023. Image: SpaceX.\r\nSpaceX launched its second Falcon 9 mission of the day, sending 22 second-generation Starlink sa… [+1841 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "Ben Verlander",
      title: "Shohei Ohtani injury: Updates from Ben Verlander - FOX Sports",
      description:
        "A source tells Ben Verlander Shohei Ohtani's fatigue in early August was unrelated to his UCL tear — and that the recent injury is different than the one he suffered in 2018.",
      url: "https://www.foxsports.com/stories/mlb/shohei-ohtani-injury-updates-from-ben-verlander",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/GettyImages-1605796123.jpg?ve=1&tl=1",
      publishedAt: "2023-08-27T02:31:29Z",
      content:
        "Shohei Ohtani tore his UCL for the second time earlier this week and will not pitch for the rest of this season. An enormous amount of speculation has circulated since then; should the Angels have sa… [+2910 chars]",
    },
    {
      source: {
        id: "the-hill",
        name: "The Hill",
      },
      author: "Julia Shapero",
      title: "Trump raises $7.1 million after Georgia mug shot - The Hill",
      description:
        "Former President Trump has raised $7.1 million since he was booked at the Fulton County jail on Thursday evening, where he became the first U.S. president to have his mug shot taken, his campaign confirmed to The Hill on Saturday. Trump, who is the frontrunne…",
      url: "https://thehill.com/homenews/campaign/4173169-trump-raises-7-1-million-after-georgia-mug-shot/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/08/MR-open_082523ap.jpg?w=1280",
      publishedAt: "2023-08-27T02:26:00Z",
      content:
        "Skip to content\r\nFormer President Trump has raised $7.1 million since he was booked at the Fulton County jail on Thursday evening, where he became the first U.S. president to have his mug shot taken,… [+1508 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Curtis Bunn",
      title:
        "60th March on Washington event merges Black America's current concerns with history - NBC News",
      description:
        "Dozens of speakers at Saturday's 60th anniversary event of the March on Washington for Jobs and Freedom, addressed many of the same concerns of the 1963 March.",
      url: "https://www.nbcnews.com/news/nbcblk/60th-march-washington-event-merges-black-americas-current-concerns-his-rcna100259",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230826-marchonwashington00-2106-zk-babfb7.jpg",
      publishedAt: "2023-08-27T02:20:00Z",
      content:
        "Sharpton, the rambunctious minister who has been a civil rights leader for decades, ended the four-hour event under a pale blue sky mixed with billowy clouds in typical Sharpton fashion: With the vig… [+2276 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nimi Princewill, Shirin Faqiri, Heather Chen",
      title:
        "Zimbabwe's President Mnangagwa reelected after tense contest - CNN",
      description:
        "Zimbabwe’s incumbent President Emmerson Mnangagwa was declared the winner in the country’s presidential elections on Saturday after securing an absolute majority in a tense presidential contest that was marred by delays.",
      url: "https://www.cnn.com/2023/08/26/africa/zimbabwe-emmerson-mnangagwa-reelected-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/200729141758-zimbabwe-president-emmerson-mnangagwa-file.jpg?q=x_61,y_299,h_1347,w_2394,c_crop/w_800",
      publishedAt: "2023-08-27T01:48:00Z",
      content:
        "Zimbabwes incumbent President Emmerson Mnangagwa was declared the winner in the countrys presidential elections on Saturday after securing an absolute majority in a tense presidential contest that wa… [+3488 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Soulframe Preludes Gameplay Teaser Trailer - GameSpot",
      description:
        "Check out a brand new gameplay teaser trailer for Soulframe. Soulframe is an upcoming game from Digital Extremes and the creative minds behind Warframe, with...",
      url: "https://www.youtube.com/watch?v=CK5657PyF1Q",
      urlToImage: "https://i.ytimg.com/vi/CK5657PyF1Q/maxresdefault.jpg",
      publishedAt: "2023-08-27T01:47:50Z",
      content: null,
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "The Associated Press, Sumiko Moots",
      title:
        "Area of Lahaina evacuated due to brush fire near site of deadly blaze - NBC News",
      description:
        "A brush fire on Saturday prompted Maui authorities to evacuate residents from a neighborhood of Lahaina, just a few miles from the site recently ravaged by blazes.",
      url: "https://www.nbcnews.com/news/us-news/area-lahaina-evacuated-due-brush-fire-site-deadly-blaze-rcna101989",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230826-kaanapali-fire-cc-2-09036p-dc2952.png",
      publishedAt: "2023-08-27T01:46:00Z",
      content:
        "LAHAINA, Hawaii A brush fire burned 10 acres on Saturday and prompted Maui authorities to evacuate residents from a neighborhood of Lahaina, just a few miles from the site recently ravaged by blazes,… [+1587 chars]",
    },
    {
      source: {
        id: null,
        name: "Entertainment Tonight",
      },
      author: "Samantha Schnurr, Rachel McRady, and",
      title:
        "'Dancing With the Stars' Judge Derek Hough Marries Hayley Erbert in Romantic Redwoods Ceremony - Entertainment Tonight",
      description:
        "Derek Hough is officially a married man after tying the knot with his longtime girlfriend.",
      url: "https://www.etonline.com/dancing-with-the-stars-judge-derek-hough-marries-hayley-erbert-in-romantic-redwoods-ceremony-194132",
      urlToImage:
        "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2022-11/MK-Hayley-Erbert-and-Derek-Hough-1280-X-720-HERO-1-IMAGE.jpg?h=a30a86ee&itok=sryGENRJ",
      publishedAt: "2023-08-27T00:40:39Z",
      content:
        "Derek Hough has officially mamboed into marriage. The ballroom pro and Dancing With the Stars judge married his longtime dancer girlfriend, Hayley Erbert, on Saturday in Monterey County, California.\r… [+3977 chars]",
    },
  ],
});

export default getArticleList;

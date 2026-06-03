export interface Template {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  titleHi?: string;
  titleTa?: string;
  description: string;
  descriptionHi?: string;
  descriptionTa?: string;
  prompt: string;
  promptHi?: string;
  promptTa?: string;
  tags: string[];
  usageCount: number;
  createdAt: string;
}

export const categories = [
  { slug: "all", label: "All Templates", labelHi: "सभी टेम्पलेट्स", labelTa: "அனைத்து வார்ப்புருக்கள்" },
  { slug: "social-media", label: "Social Media", labelHi: "सोशल मीडिया", labelTa: "சமூக ஊடகம்" },
  { slug: "email", label: "Email", labelHi: "ईमेल", labelTa: "மின்னஞ்சல்" },
  { slug: "blog", label: "Blog & Articles", labelHi: "ब्लॉग और लेख", labelTa: "வலைப்பதிவு மற்றும் கட்டுரைகள்" },
  { slug: "business", label: "Business", labelHi: "व्यवसाय", labelTa: "வணிகம்" },
  { slug: "creative", label: "Creative Writing", labelHi: "रचनात्मक लेखन", labelTa: "படைப்பாற்றல் எழுத்து" },
  { slug: "coding", label: "Coding & Tech", labelHi: "कोडिंग और टेक", labelTa: "குறியீட்டு மற்றும் தொழில்நுட்பம்" },
  { slug: "academic", label: "Academic", labelHi: "शैक्षणिक", labelTa: "கல்வி" },
];

export const templates: Template[] = [
  {
    id: "t1",
    slug: "linkedin-post-engagement",
    category: "Social Media",
    categorySlug: "social-media",
    title: "LinkedIn Post for Engagement",
    titleHi: "LinkedIn एंगेजमेंट पोस्ट",
    titleTa: "LinkedIn ஈடுபாடு இடுகை",
    description: "Write a LinkedIn post that sparks professional conversations and drives comments.",
    descriptionHi: "एक LinkedIn पोस्ट लिखें जो पेशेवर बातचीत शुरू करे और कमेंट्स बढ़ाए।",
    descriptionTa: "தொழில்முறை உரையாடல்களைத் தூண்டி கருத்துகளை அதிகரிக்கும் LinkedIn இடுகையை எழுதுங்கள்.",
    prompt: `Write a LinkedIn post (150-200 words) about [TOPIC] that:
1. Opens with a thought-provoking question or bold statement
2. Shares a personal insight or lesson learned
3. Includes a clear call-to-action asking for opinions
4. Uses 3-5 relevant hashtags
5. Maintains a professional yet conversational tone`,
    promptHi: `[TOPIC] के बारे में एक LinkedIn पोस्ट (150-200 शब्द) लिखें जो:
1. एक सोचने पर मजबूर करने वाले सवाल या बोल्ड स्टेटमेंट से शुरू हो
2. एक व्यक्तिगत अंतर्दृष्टि या सीखा हुआ पाठ साझा करे
3. राय मांगने के लिए एक स्पष्ट कॉल-टू-एक्शन शामिल करे
4. 3-5 प्रासंगिक हैशटैग का उपयोग करे
5. पेशेवर लेकिन बातचीत वाले टोन को बनाए रखे`,
    promptTa: `[TOPIC] பற்றி ஒரு LinkedIn இடுகையை (150-200 சொற்கள்) எழுதுங்கள்:
1. ஒரு சிந்தனையைத் தூண்டும் கேள்வி அல்லது துணிச்சலான கூற்றுடன் தொடங்கவும்
2. ஒரு தனிப்பட்ட பார்வை அல்லது கற்ற பாடத்தைப் பகிரவும்
3. கருத்துகளைக் கேட்க ஒரு தெளிவான அழைப்பைச் சேர்க்கவும்
4. 3-5 தொடர்புடைய ஹேஷ்டேக்குகளைப் பயன்படுத்தவும்
5. தொழில்முறை ஆனால் உரையாடல் தன்மை கொண்ட தொனியை பேணவும்`,
    tags: ["LinkedIn", "engagement", "professional", "social"],
    usageCount: 12450,
    createdAt: "2025-01-15",
  },
  {
    id: "t2",
    slug: "instagram-caption",
    category: "Social Media",
    categorySlug: "social-media",
    title: "Instagram Caption with Hooks",
    titleHi: "हुक वाला Instagram कैप्शन",
    titleTa: "ஹுக்குகளுடன் Instagram கேப்ஷன்",
    description: "Generate catchy Instagram captions with attention-grabbing hooks and CTAs.",
    descriptionHi: "ध्यान खींचने वाले हुक और CTA के साथ आकर्षक Instagram कैप्शन बनाएं।",
    descriptionTa: "கவனத்தை ஈர்க்கும் ஹுக்குகள் மற்றும் CTAகளுடன் கவர்ச்சிகரமான Instagram கேப்ஷன்களை உருவாக்கவும்.",
    prompt: `Create 3 Instagram captions for [PHOTO DESCRIPTION]:
1. Each caption should be under 125 words
2. Start with a hook (question, bold claim, or curiosity gap)
3. Include emojis naturally throughout
4. End with a CTA (comment, share, or visit link)
5. Add 8-10 relevant hashtags at the end`,
    promptHi: `[PHOTO DESCRIPTION] के लिए 3 Instagram कैप्शन बनाएं:
1. प्रत्येक कैप्शन 125 शब्दों से कम हो
2. एक हुक से शुरू करें (सवाल, बोल्ड दावा, या जिज्ञासा)
3. प्राकृतिक रूप से इमोजी शामिल करें
4. CTA के साथ समाप्त करें (कमेंट, शेयर, या लिंक विज़िट)
5. अंत में 8-10 प्रासंगिक हैशटैग जोड़ें`,
    promptTa: `[PHOTO DESCRIPTION] க்கு 3 Instagram கேப்ஷன்களை உருவாக்கவும்:
1. ஒவ்வொரு கேப்ஷனும் 125 சொற்களுக்கு குறைவாக இருக்க வேண்டும்
2. ஒரு ஹுக்குடன் தொடங்கவும் (கேள்வி, துணிச்சலான கூற்று, அல்லது ஆர்வம்)
3. இயற்கையாக ஈமோஜிகளைச் சேர்க்கவும்
4. CTAவுடன் முடிக்கவும் (கருத்து, பகிர்வு, அல்லது இணைப்பு பார்வை)
5. இறுதியில் 8-10 தொடர்புடைய ஹேஷ்டேக்குகளைச் சேர்க்கவும்`,
    tags: ["Instagram", "caption", "social", "engagement"],
    usageCount: 9870,
    createdAt: "2025-01-20",
  },
  {
    id: "t3",
    slug: "cold-email-outreach",
    category: "Email",
    categorySlug: "email",
    title: "Cold Email Outreach",
    titleHi: "कोल्ड ईमेल आउटरीच",
    titleTa: "குளிர் மின்னஞ்சல் அணுகல்",
    description: "Craft personalized cold emails that get opened and replied to.",
    descriptionHi: "ऐसे व्यक्तिगतृत कोल्ड ईमेल लिखें जो खोले जाएं और जवाब मिले।",
    descriptionTa: "திறக்கப்பட்டு பதிலளிக்கப்படும் தனிப்பயனாக்கப்பட்ட குளிர் மின்னஞ்சல்களை உருவாக்கவும்.",
    prompt: `Write a cold email to [PROSPECT NAME] at [COMPANY]:
1. Subject line: 40-50 characters, personalized, curiosity-driven
2. Opening: Reference a specific recent achievement or post of theirs
3. Body: 2-3 short paragraphs max, focus on their pain point
4. Value prop: One clear benefit, not feature list
5. CTA: Low-friction ask (15-min chat, not "let me know")
6. Sign-off: Professional but warm`,
    promptHi: `[COMPANY] में [PROSPECT NAME] को एक कोल्ड ईमेल लिखें:
1. सब्जेक्ट लाइन: 40-50 अक्षर, व्यक्तिगतृत, जिज्ञासा-संचालित
2. ओपनिंग: उनकी एक विशिष्ट हाल की उपलब्धि या पोस्ट का संदर्भ दें
3. बॉडी: अधिकतम 2-3 छोटे पैराग्राफ, उनकी समस्या पर ध्यान केंद्रित करें
4. वैल्यू प्रॉप: एक स्पष्ट लाभ, फीचर सूची नहीं
5. CTA: कम-घर्षण अनुरोध (15-मिनट चैट, "मुझे बताएं" नहीं)
6. साइन-ऑफ: पेशेवर लेकिन गर्मजोशी भरा`,
    promptTa: `[COMPANY] இல் [PROSPECT NAME] க்கு ஒரு குளிர் மின்னஞ்சலை எழுதுங்கள்:
1. தலைப்பு வரி: 40-50 எழுத்துகள், தனிப்பயனாக்கப்பட்ட, ஆர்வம்-சார்ந்த
2. தொடக்கம்: அவர்களின் குறிப்பிட்ட சமீபத்திய சாதனை அல்லது பதிவைக் குறிப்பிடவும்
3. உடல்: அதிகபட்சம் 2-3 குறுகிய பத்திகள், அவர்களின் பிரச்சனையில் கவனம் செலுத்தவும்
4. மதிப்பு முன்மொழிவு: ஒரு தெளிவான நன்மை, அம்ச பட்டியல் அல்ல
5. CTA: குறைந்த-எதிர்ப்பு கோரிக்கை (15-நிமிட அரட்டை, "எனக்குத் தெரியப்படுத்துங்கள்" அல்ல)
6. கையொப்பம்: தொழில்முறை ஆனால் வெப்பமானது`,
    tags: ["email", "outreach", "sales", "B2B"],
    usageCount: 15630,
    createdAt: "2025-01-10",
  },
  {
    id: "t4",
    slug: "blog-seo-article",
    category: "Blog",
    categorySlug: "blog",
    title: "SEO Blog Article",
    titleHi: "SEO ब्लॉग लेख",
    titleTa: "SEO வலைப்பதிவு கட்டுரை",
    description: "Generate a complete SEO-optimized blog article with headings and meta description.",
    descriptionHi: "हेडिंग्स और मेटा विवरण के साथ एक पूर्ण SEO-अनुकूलित ब्लॉग लेख तैयार करें।",
    descriptionTa: "தலைப்புகள் மற்றும் மேட்டா விளக்கத்துடன் முழுமையான SEO-உகந்த வலைப்பதிவு கட்டுரையை உருவாக்கவும்.",
    prompt: `Write a comprehensive SEO blog article about [TOPIC]:
1. Title: Include primary keyword, under 60 characters, compelling
2. Meta description: 150-160 characters with CTA
3. Introduction: Hook + problem + promise structure
4. Body: Use H2 and H3 subheadings, include 3-5 LSI keywords naturally
5. Include a numbered list or comparison table
6. Conclusion: Summary + clear CTA
7. Suggest 5 internal linking opportunities`,
    promptHi: `[TOPIC] पर एक व्यापक SEO ब्लॉग लेख लिखें:
1. शीर्षक: प्राथमिक कीवर्ड शामिल करें, 60 अक्षरों से कम, आकर्षक
2. मेटा विवरण: CTA के साथ 150-160 अक्षर
3. परिचय: हुक + समस्या + वादा संरचना
4. बॉडी: H2 और H3 उपशीर्षकों का उपयोग करें, 3-5 LSI कीवर्ड प्राकृतिक रूप से शामिल करें
5. एक क्रमांकित सूची या तुलना तालिका शामिल करें
6. निष्कर्ष: सारांश + स्पष्ट CTA
7. 5 आंतरिक लिंकिंग अवसर सुझाएं`,
    promptTa: `[TOPIC] பற்றி ஒரு விரிவான SEO வலைப்பதிவு கட்டுரையை எழுதுங்கள்:
1. தலைப்பு: முதன்மை முக்கியச்சொல்லை உள்ளடக்கியது, 60 எழுத்துகளுக்குக் கீழ், கவர்ச்சிகரமானது
2. மேட்டா விளக்கம்: CTAவுடன் 150-160 எழுத்துகள்
3. அறிமுகம்: ஹுக் + பிரச்சனை + வாக்குறுதி கட்டமைப்பு
4. உடல்: H2 மற்றும் H3 துணைத்தலைப்புகளைப் பயன்படுத்தவும், 3-5 LSI முக்கியச்சொற்களை இயற்கையாகச் சேர்க்கவும்
5. ஒரு எண்ணிடப்பட்ட பட்டியல் அல்லது ஒப்பீட்டு அட்டவணையைச் சேர்க்கவும்
6. முடிவுரை: சுருக்கம் + தெளிவான CTA
7. 5 உள் இணைப்பு வாய்ப்புகளைப் பரிந்துரைக்கவும்`,
    tags: ["blog", "SEO", "content", "writing"],
    usageCount: 18920,
    createdAt: "2025-01-05",
  },
  {
    id: "t5",
    slug: "product-description-ecommerce",
    category: "Business",
    categorySlug: "business",
    title: "E-commerce Product Description",
    titleHi: "ई-कॉमर्स उत्पाद विवरण",
    titleTa: "மின்வணிக தயாரிப்பு விளக்கம்",
    description: "Write persuasive product descriptions that convert browsers into buyers.",
    descriptionHi: "ऐसे प्रभावशाली उत्पाद विवरण लिखें जो ब्राउज़रों को खरीदारों में बदल दें।",
    descriptionTa: "உலாவுபவர்களை வாங்குபவர்களாக மாற்றும் தூண்டுதலான தயாரிப்பு விளக்கங்களை எழுதுங்கள்.",
    prompt: `Write a product description for [PRODUCT NAME]:
1. Headline: Benefit-driven, under 10 words
2. Opening: Identify the user's desire or pain point
3. Features → Benefits: List 3-4 features, translate each to emotional benefit
4. Social proof element: Suggest where to add reviews or stats
5. Urgency/scarcity: One subtle line
6. CTA: Strong, action-oriented button text`,
    promptHi: `[PRODUCT NAME] के लिए एक उत्पाद विवरण लिखें:
1. हेडलाइन: लाभ-संचालित, 10 शब्दों से कम
2. ओपनिंग: उपयोगकर्ता की इच्छा या समस्या की पहचान करें
3. फीचर्स → लाभ: 3-4 फीचर्स सूचीबद्ध करें, प्रत्येक को भावनात्मक लाभ में अनुवादित करें
4. सोशल प्रूफ तत्व: समीक्षा या आंकड़े जोड़ने के लिए सुझाव दें
5. तात्कालिकता/कमी: एक सूक्ष्म पंक्ति
6. CTA: मजबूत, एक्शन-ओरिएंटेड बटन टेक्स्ट`,
    promptTa: `[PRODUCT NAME] க்கு ஒரு தயாரிப்பு விளக்கத்தை எழுதுங்கள்:
1. தலைப்பு: நன்மை-சார்ந்த, 10 சொற்களுக்குக் கீழ்
2. தொடக்கம்: பயனரின் விருப்பம் அல்லது பிரச்சனையை அடையாளம் காணவும்
3. அம்சங்கள் → நன்மைகள்: 3-4 அம்சங்களைப் பட்டியலிடவும், ஒவ்வொன்றையும் உணர்ச்சி நன்மைக்கு மாற்றவும்
4. சமூக ஆதார உறுப்பு: மதிப்புரைகள் அல்லது புள்ளிவிவரங்களைச் சேர்க்க எங்கு என்று பரிந்துரைக்கவும்
5. அவசரம்/பற்றாக்குறை: ஒரு மென்மையான வரி
6. CTA: வலுவான, செயல்-சார்ந்த பொத்தான் உரை`,
    tags: ["ecommerce", "product", "sales", "conversion"],
    usageCount: 11200,
    createdAt: "2025-01-25",
  },
  {
    id: "t6",
    slug: "story-outline",
    category: "Creative Writing",
    categorySlug: "creative",
    title: "Short Story Outline",
    titleHi: "लघु कथा रूपरेखा",
    titleTa: "குறுகிய கதை வரைபடம்",
    description: "Generate a structured outline for a compelling short story with character arcs.",
    descriptionHi: "चरित्र चापों के साथ एक मनोरंजक लघु कथा के लिए एक संरचित रूपरेखा तैयार करें।",
    descriptionTa: "கதாபாத்திர வளைவுகளுடன் கவர்ச்சிகரமான குறுகிய கதைக்கு ஒரு கட்டமைக்கப்பட்ட வரைபடத்தை உருவாக்கவும்.",
    prompt: `Create a detailed outline for a short story about [THEME/GENRE]:
1. Premise: One-sentence hook
2. Protagonist: Name, age, core desire, internal flaw
3. 3-act structure with 2-3 bullet points per act
4. 2 supporting characters with brief roles
5. Setting: Time, place, mood
6. Conflict: Internal + external
7. Resolution type: Happy, tragic, or bittersweet`,
    promptHi: `[THEME/GENRE] के बारे में एक लघु कथा के लिए विस्तृत रूपरेखा बनाएं:
1. प्रेमिस: एक वाक्य का हुक
2. नायक: नाम, उम्र, मुख्य इच्छा, आंतरिक दोष
3. प्रति अधिनियम 2-3 बुलेट बिंदुओं के साथ 3-अधिनियम संरचना
4. संक्षिप्त भूमिकाओं के साथ 2 सहायक पात्र
5. सेटिंग: समय, स्थान, मूड
6. संघर्ष: आंतरिक + बाहरी
7. संकल्प प्रकार: सुखी, दुखद, या कड़वा-मीठा`,
    promptTa: `[THEME/GENRE] பற்றி ஒரு குறுகிய கதைக்கு விரிவான வரைபடத்தை உருவாக்கவும்:
1. அடிப்படை: ஒரு வாக்கிய ஹுக்
2. கதாநாயகன்: பெயர், வயது, முக்கிய விருப்பம், உள்ளார்ந்த குறைபாடு
3. ஒவ்வொரு செயலுக்கும் 2-3 புள்ளி விவரங்களுடன் 3-செயல் கட்டமைப்பு
4. சுருக்கமான பாத்திரங்களுடன் 2 துணை கதாபாத்திரங்கள்
5. அமைப்பு: நேரம், இடம், மனநிலை
6. மோதல்: உள்ளார்ந்த + வெளிப்புற
7. தீர்வு வகை: மகிழ்ச்சியான, துயரமான, அல்லது இனிமையான-கசப்பான`,
    tags: ["story", "creative", "writing", "fiction"],
    usageCount: 7650,
    createdAt: "2025-02-01",
  },
  {
    id: "t7",
    slug: "code-review-prompt",
    category: "Coding & Tech",
    categorySlug: "coding",
    title: "AI Code Review Request",
    titleHi: "AI कोड रिव्यू अनुरोध",
    titleTa: "AI குறியீட்டு மதிப்பீட்டு கோரிக்கை",
    description: "Structure your code review request to get the most helpful AI feedback.",
    descriptionHi: "सबसे सहायक AI प्रतिक्रिया पाने के लिए अपने कोड रिव्यू अनुरोध को संरचित करें।",
    descriptionTa: "மிகவும் பயனுள்ள AI கருத்தைப் பெற உங்கள் குறியீட்டு மதிப்பீட்டு கோரிக்கையை கட்டமைக்கவும்.",
    prompt: `Review this [LANGUAGE] code for [PURPOSE]:
1. Check for: bugs, security issues, performance bottlenecks
2. Suggest specific refactoring opportunities
3. Evaluate naming conventions and code readability
4. Identify missing error handling or edge cases
5. Rate overall code quality 1-10 with reasoning
6. Provide improved version with comments explaining changes`,
    promptHi: `[PURPOSE] के लिए इस [LANGUAGE] कोड की समीक्षा करें:
1. जांचें: बग, सुरक्षा समस्याएं, प्रदर्शन बाधाएं
2. विशिष्ट रिफैक्टरिंग अवसर सुझाएं
3. नामकरण सम्मेलनों और कोड पठनीयता का मूल्यांकन करें
4. गुम त्रुटि संभाल या एज केस की पहचान करें
5. तर्क के साथ समग्र कोड गुणवत्ता का मूल्यांकन 1-10
6. परिवर्तनों की व्याख्या करने वाले टिप्पणियों के साथ सुधारित संस्करण प्रदान करें`,
    promptTa: `[PURPOSE] க்கான இந்த [LANGUAGE] குறியீட்டை மதிப்பிடவும்:
1. சரிபார்க்கவும்: பிழைகள், பாதுகாப்பு பிரச்சனைகள், செயல்திறன் தடைகள்
2. குறிப்பிட்ட மறுசீரமைப்பு வாய்ப்புகளை பரிந்துரைக்கவும்
3. பெயரிடும் மரபுகள் மற்றும் குறியீட்டு வாசிப்புத்திறனை மதிப்பிடவும்
4. காணாமல் போன பிழை கையாளுதல் அல்லது ஓரங்களை அடையாளம் காணவும்
5. காரணத்துடன் மொத்த குறியீட்டு தரத்தை 1-10 மதிப்பிடவும்
6. மாற்றங்களை விளக்கும் கருத்துகளுடன் மேம்படுத்தப்பட்ட பதிப்பை வழங்கவும்`,
    tags: ["code", "review", "developer", "tech"],
    usageCount: 8920,
    createdAt: "2025-02-05",
  },
  {
    id: "t8",
    slug: "research-paper-summary",
    category: "Academic",
    categorySlug: "academic",
    title: "Research Paper Summary",
    titleHi: "शोध पत्र सारांश",
    titleTa: "ஆராய்ச்சி கட்டுரை சுருக்கம்",
    description: "Summarize academic papers into digestible key points and implications.",
    descriptionHi: "शैक्षणिक पत्रों को पचाने योग्य मुख्य बिंदुओं और निहितार्थों में सारांशित करें।",
    descriptionTa: "கல்வி கட்டுரைகளை செரிமானம் செய்யக்கூடிய முக்கிய புள்ளிகள் மற்றும் விளைவுகளாக சுருக்கவும்.",
    prompt: `Summarize this research paper about [TOPIC]:
1. One-paragraph abstract (max 100 words)
2. 3-5 key findings with brief explanations
3. Methodology overview (2-3 sentences)
4. Limitations mentioned or implied
5. Real-world applications or implications
6. Suggest 2-3 follow-up research questions`,
    promptHi: `[TOPIC] के बारे में इस शोध पत्र का सारांश लिखें:
1. एक-पैराग्राफ सार (अधिकतम 100 शब्द)
2. संक्षिप्त व्याख्याओं के साथ 3-5 मुख्य निष्कर्ष
3. कार्यप्रणाली अवलोकन (2-3 वाक्य)
4. उल्लिखित या निहित सीमाएं
5. वास्तविक-दुनिया अनुप्रयोग या निहितार्थ
6. 2-3 अनुवर्ती शोध प्रश्न सुझाएं`,
    promptTa: `[TOPIC] பற்றிய இந்த ஆராய்ச்சி கட்டுரையை சுருக்கவும்:
1. ஒரு பத்தி சுருக்கம் (அதிகபட்சம் 100 சொற்கள்)
2. சுருக்கமான விளக்கங்களுடன் 3-5 முக்கிய கண்டுபிடிப்புகள்
3. முறையியல் கண்ணோட்டம் (2-3 வாக்கியங்கள்)
4. குறிப்பிடப்பட்ட அல்லது உள்ளடக்கிய குறைபாடுகள்
5. நிஜ உலக பயன்பாடுகள் அல்லது விளைவுகள்
6. 2-3 தொடர்ச்சி ஆராய்ச்சி கேள்விகளை பரிந்துரைக்கவும்`,
    tags: ["academic", "research", "summary", "education"],
    usageCount: 6780,
    createdAt: "2025-02-10",
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getTemplatesByCategory(categorySlug: string): Template[] {
  if (categorySlug === "all") return templates;
  return templates.filter((t) => t.categorySlug === categorySlug);
}

export function getRelatedTemplates(templateId: string, limit = 3): Template[] {
  const current = templates.find((t) => t.id === templateId);
  if (!current) return [];
  return templates
    .filter((t) => t.id !== templateId && t.categorySlug === current.categorySlug)
    .slice(0, limit);
}

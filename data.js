window.profileData = {
  pageTitle: "张三 - 教师个人主页",
  name: "张三",
  title: "副教授，博士生导师",
  affiliation: "某某大学 经济管理学院",
  email: "zhangsan@university.edu",
  photo: "photo.jpg", // 放在同一目录，或者写网络图片的完整 URL

  aboutHtml: `
    张三，某某大学经济管理学院副教授、博士生导师。主要研究领域为公司金融与公司治理，
    研究成果发表于国内外重要学术期刊。主持和参与多项国家自然科学基金和省部级课题。
    <br /><br />
    本人欢迎对相关研究领域有兴趣的博士研究生、硕士研究生以及本科生加入课题组。
  `,

  researchInterests: [
    "公司金融（Corporate Finance）",
    "公司治理与高管激励",
    "资本市场与信息披露",
    "实证资产定价"
  ],

  publications: [
    {
      title: "标题示例：信息披露与公司价值研究",
      authors: "张三, 李四",
      journal: "《管理世界》",
      year: "2024",
      link: ""
    },
    {
      title: "Corporate Governance and Firm Performance",
      authors: "Zhang, S., Li, S.",
      journal: "Journal of Corporate Finance",
      year: "2023",
      link: "https://example.com/paper-link"
    }
  ],

  teachingHtml: `
    <p><strong>本科课程</strong>：公司理财（Corporate Finance）、财务管理。</p>
    <p><strong>研究生课程</strong>：高级公司金融专题。</p>
  `,

  studentsHtml: `
    <p>当前招收对公司金融、公司治理、资本市场等方向感兴趣的博士生与硕士生，欢迎发送
    <strong>个人简历 + 成绩单 + 简要研究计划</strong> 至邮箱。</p>
    <p>欢迎优秀本科生参与科研训练和学术竞赛。</p>
  `,

  contactHtml: `
    <p>邮箱：zhangsan@university.edu</p>
    <p>办公地址：某某大学某楼某室</p>
    <p>通讯地址：某市某区某路 123 号 邮编 100000</p>
  `,

  footerText: "© 2026 张三. 本页内容仅代表个人观点。"
};
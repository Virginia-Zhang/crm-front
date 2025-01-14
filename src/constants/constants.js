// Menu list data in sidebar of Dashboard page
export const menuData = [
	{
		index: "/dashboard/marketing",
		title: "市场活动",
		icon: "PieChart",
		children: [
			{ index: "/dashboard/marketing", title: "市场活动", icon: "PieChart" },
			{ index: "/dashboard/marketing/recycle", title: "回收站", icon: "DeleteFilled" },
		],
	},
	{
		index: "/dashboard/clues",
		title: "线索管理",
		icon: "List",
		children: [
			{ index: "/dashboard/clues", title: "线索管理", icon: "List" },
			{ index: "/dashboard/clues/recycle", title: "回收站", icon: "DeleteFilled" },
		],
	},
	{
		index: "/dashboard/customer",
		title: "客户管理",
		icon: "Avatar",
		children: [{ index: "/dashboard/customer", title: "客户管理", icon: "Avatar" }],
	},
	{
		index: "/dashboard/transaction",
		title: "交易管理",
		icon: "ShoppingCart",
		children: [{ index: "/dashboard/transaction", title: "交易管理", icon: "ShoppingCart" }],
	},
	{
		index: "/dashboard/product",
		title: "产品管理",
		icon: "Box",
		children: [{ index: "/dashboard/product", title: "产品管理", icon: "Box" }],
	},
	{
		index: "/dashboard/dictionary",
		title: "字典管理",
		icon: "Notebook",
		children: [{ index: "/dashboard/dictionary", title: "字典管理", icon: "Notebook" }],
	},
	{
		index: "/dashboard/user",
		title: "用户管理",
		icon: "User",
		children: [
			{ index: "/dashboard/user", title: "用户管理", icon: "User" },
			{ index: "/dashboard/user/recycle", title: "回收站", icon: "DeleteFilled" },
		],
	},
	{
		index: "/dashboard/system",
		title: "系统管理",
		icon: "Setting",
		children: [{ index: "/dashboard/system", title: "系统管理", icon: "Setting" }],
	},
]

// region details
// language: 1-English, 2-Chinese, 3-Japanese
export const regionData = [
	{
		id: 1,
		name: "中国",
		currencyUnit: "RMB",
		language: 2,
	},
	{
		id: 2,
		name: "日本",
		currencyUnit: "JPY",
		language: 3,
	},
	{
		id: 3,
		name: "美国",
		currencyUnit: "USD",
		language: 1,
	},
	{
		id: 4,
		name: "其他",
		currencyUnit: "USD",
		language: 1,
	},
]

// An array of different marketing campaign budget range, currency unit is RMB
export const budgetRangeRMB = [
	"0-5,000",
	"5,000-10,000",
	"10,000-50,000",
	"50,000-100,000",
	"100,000-500,000",
	"500,000-1,000,000",
	"1,000,000+",
]

// An array of different marketing campaign budget range, currency unit is USD
export const budgetRangeUSD = [
	"0-1,000",
	"1,000-5,000",
	"5,000-10,000",
	"10,000-50,000",
	"50,000-100,000",
	"100,000+",
]
// An array of different marketing campaign budget range, currency unit is JPY
export const budgetRangeJPY = [
	"0-100,000",
	"100,000-1,000,000",
	"1,000,000-1,000,0000",
	"10,000,000+",
]

// The number of items per page by default
export const PAGE_SIZE = 10

// Marketing clue state options
export const clueStateOptions = [
	{ name: "已转客户", id: 1 },
	{ name: "虚假线索", id: 2 },
	{ name: "需要条件", id: 3 },
	{ name: "将来联系", id: 4 },
	{ name: "丢失线索", id: 5 },
	{ name: "试图联系", id: 6 },
	{ name: "未联系", id: 7 },
	{ name: "已联系", id: 8 },
]

// Marketing clue source options
export const clueSourceOptions = [
	{ name: "易车网", id: 1, region: [1] },
	{ name: "员工介绍", id: 2, region: [1] },
	{ name: "官方网站/APP", id: 3, region: [1] },
	{ name: "公众号", id: 4, region: [1] },
	{ name: "线下展厅参观", id: 5, region: [1] },
	{ name: "懂车帝", id: 6, region: [1] },
	{ name: "朋友圈", id: 7, region: [1] },
	{ name: "合作伙伴", id: 8, region: [1] },
	{ name: "地图", id: 9, region: [1] },
	{ name: "视频直播", id: 10, region: [1] },
	{ name: "网络广告", id: 11, region: [1] },
	{ name: "汽车之家", id: 12, region: [1] },
	{ name: "车展会", id: 13, region: [1] },
	{ name: "知乎", id: 14, region: [1] },
	{ name: "其他", id: 15, region: [1] },
	{ name: "カーセンサー (Car Sensor)", id: 16, region: [2] },
	{ name: "社員紹介", id: 17, region: [2] },
	{ name: "公式ウェブサイト/アプリ", id: 18, region: [2] },
	{ name: "Facebook/Instagram", id: 19, region: [2] },
	{ name: "ショールーム訪問", id: 20, region: [2] },
	{ name: "グーネット (Goo-net)", id: 21, region: [2] },
	{ name: "Twitter", id: 22, region: [2] },
	{ name: "ビジネスパートナー", id: 23, region: [2] },
	{ name: "Googleマップ", id: 24, region: [2] },
	{ name: "ライブビデオ配信", id: 25, region: [2] },
	{ name: "オンライン広告", id: 26, region: [2] },
	{ name: "自動車展示会", id: 27, region: [2] },
	{ name: "Yahoo!知恵袋/OKWave", id: 28, region: [2] },
	{ name: "その他", id: 29, region: [2] },
	{ name: "Autotrader", id: 30, region: [3] },
	{ name: "Employee Referral", id: 31, region: [3, 4] },
	{ name: "Official Website/APP", id: 32, region: [3, 4] },
	{ name: "Facebook/Instagram", id: 33, region: [3, 4] },
	{ name: "Showroom Visit", id: 34, region: [3, 4] },
	{ name: "Edmunds", id: 35, region: [3] },
	{ name: "Twitter", id: 36, region: [3, 4] },
	{ name: "Business Partners", id: 37, region: [3, 4] },
	{ name: "Google Maps", id: 38, region: [3, 4] },
	{ name: "Live Streaming Video", id: 39, region: [3, 4] },
	{ name: "Online Ads", id: 40, region: [3, 4] },
	{ name: "Car Exhibition", id: 41, region: [3, 4] },
	{ name: "Quora", id: 42, region: [3] },
	{ name: "Others", id: 43, region: [3, 4] },
]

// Customer gender options
export const genderOptions = [
	{ name: "男", value: 1 },
	{ name: "女", value: 2 },
]

// Customer need_loan options
export const needLoanOptions = [
	{ name: "不需要", value: 0 },
	{ name: "需要", value: 1 },
]

// Customer intention_state options
export const intentionStateOptions = [
	{ name: "无意向", value: 0 },
	{ name: "有意向", value: 1 },
	{ name: "意向不明", value: 2 },
]

// Customer contact_method options
export const contactMethodOptions = [
	{ name: "电话", value: 1 },
	{ name: "短信", value: 2 },
	{ name: "社交媒体", value: 3 },
	{ name: "邮件", value: 4 },
	{ name: "其他", value: 5 },
]

// Mapping of the custom headers of the exported customer data excel and the keys in the customer data
export const customerExcelHeaders = [
	{ label: "负责人", key: "ownerAct" },
	{ label: "所属线索ID", key: "clueId" },
	{ label: "客户姓名", key: "fullName" },
	{ label: "客户性别", key: "gender" },
	{ label: "客户手机", key: "phone" },
	{ label: "客户邮箱", key: "email" },
	{ label: "其他联系方式", key: "otherContactDetails" },
	{ label: "客户年龄", key: "age" },
	{ label: "客户职业", key: "job" },
	{ label: "客户年收入", key: "yearIncome" },
	{ label: "货币单位", key: "currencyUnit" },
	{ label: "客户住址", key: "address" },
	{ label: "是否贷款", key: "needLoan" },
	{ label: "意向产品", key: "intentionProductName" },
	{ label: "客户来源", key: "source" },
	{ label: "描述", key: "description" },
	{ label: "下次联系时间", key: "nextContactTime" },
	{ label: "地区", key: "region" },
]

// Mapping of the custom headers of the exported marketing activity/campaign data excel and the keys in the activity data
export const activityExcelHeaders = [
	{ label: "活动负责人", key: "ownerAct" },
	{ label: "活动名称", key: "name" },
	{ label: "开始时间", key: "startTime" },
	{ label: "结束时间", key: "endTime" },
	{ label: "活动描述", key: "description" },
	{ label: "活动预算", key: "cost" },
	{ label: "货币单位", key: "currencyUnit" },
	{ label: "地区", key: "region" },
	{ label: "创建时间", key: "createTime" },
	{ label: "创建人", key: "createByAct" },
	{ label: "编辑时间", key: "editTime" },
	{ label: "编辑人", key: "editByAct" },
]

// Mapping of the custom headers of the exported clue data excel and the keys in the clue data
export const clueExcelHeaders = [
	{ label: "负责人", key: "ownerAct" },
	{ label: "活动名称", key: "activityName" },
	{ label: "客户姓名", key: "fullName" },
	{ label: "客户性别", key: "gender" },
	{ label: "客户手机", key: "phone" },
	{ label: "客户邮箱", key: "email" },
	{ label: "其他联系方式", key: "otherContactDetails" },
	{ label: "客户年龄", key: "age" },
	{ label: "客户职业", key: "job" },
	{ label: "客户年收入", key: "yearIncome" },
	{ label: "货币单位", key: "currencyUnit" },
	{ label: "客户住址", key: "address" },
	{ label: "是否贷款", key: "needLoan" },
	{ label: "客户意向", key: "intentionState" },
	{ label: "意向产品", key: "intentionProductName" },
	{ label: "线索状态", key: "state" },
	{ label: "线索来源", key: "source" },
	{ label: "描述", key: "description" },
	{ label: "下次联系时间", key: "nextContactTime" },
	{ label: "地区", key: "region" },
]

// Transaction stage options
export const transactionStageOptions = [
	{ name: "创建交易", value: 1 },
	{ name: "确认清单", value: 2 },
	{ name: "交付定金", value: 3 },
	{ name: "产品检验", value: 4 },
	{ name: "付款成交", value: 5 },
	{ name: "交易取消", value: 6 },
]

// Role data list
export const roleData = [
	{ name: "管理员", id: 1 },
	{ name: "销售员", id: 2 },
	{ name: "销售经理", id: 3 },
	{ name: "市场营销", id: 4 },
	{ name: "财务", id: 5 },
	{ name: "超级管理员", id: 6 },
	{ name: "超级财务", id: 7 },
	{ name: "市场营销经理", id: 8 },
]

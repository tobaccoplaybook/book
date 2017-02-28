module.exports = {
	"contentSource": "../content/",
	"buildDestination": "./build/",
	"cache": "./cache/",

	"githubRepo": "https://github.com/tobaccoplaybook/site/",
	"contentRepo": "https://gitlab.com/base.io/tobaccoplaybook-content/",
	"deepGithubDiffLinks": true,

	"domain": "https://tobaccoplaybook.net/",
	"sitename": "Tobacco Control Playbook",
	"frontimage": "/lib/WHO-TobControl-image-1600x900.jpg",
	
	"feedOptions": {
		"general": {
			"image_url": "",
			"managingEditor": "tobaccofree@euro.who.int (WHO Regional Office for Europe)",
			"ttl": 60
		},
		"en": {
			"copyright": "WHO Regional Office for Europe",
			"title": "Tobacco Control Playbook",
			"description": "The tobacco playbook of arguments illustrates how the industry players act to oppose tobacco control measures and how governments and the public health community can respond to their arguments.",
			"language": "en",
			"categories": ["second-hand smoke", "health effects", "smokefree legislation", "exposure", "indoor public places", "enforcement", "tobacco products", "product packaging", "tobacco industry", "warnings", "plain packaging", "smokefree policy", "public places", "hospitality industry", "tobacco marketing", "children", "young people", "tobacco advertising", "promotion", "sponsorship", "Illicit tobacco trade", "tobacco taxation", "tobacco market", "smuggling", "counterfeiting", "tobacco prices", "health intervention", "revenue", "tobacco consumption", "economy", "public health", "Trade law", "trade agreements", "WHO FCTC", "WTO", "case law", "investment law", "sovereign right of states", "commercial rights", "intellectual property"]
		},
		"ru": {
			"copyright": "Европейское региональное бюро ВОЗ",
			"title": "Сборник аргументов для борьбы с табаком",
			"description": "Сборник аргументов демонстрирует аргументы, используемые табачными компаниями, и как именно правительства и защитники общественного здоровья могут ответить на них.",
			"language": "ru",
			"categories": ["вторичный табачный дым","влияние на здоровье человека","законодательство о запрете курения","воздействие","закрытые общественные места","осуществление","табачные изделия","упаковка","табачная промышленность","предупреждения о вреде для здоровья","простая упаковка","политика по обеспечению бездымной среды","места общественного пользования","гостинично-ресторанный бизнес","табачный маркетинг","дети","молодые люди","реклама табачных изделий","стимулирование продажи","спонсорство","незаконная торговля табачными изделиями","налогообложение табачных изделий","рынок табачных изделий","контрабанда","производство контрафактной продукции","цены на табак","вмешательства по укреплению здоровья","поступления","потребление табачной продукции","экономика","общественное здравоохранение","торговое право","торговые соглашения","РКБТ ВОЗ","ВТО","судебная практика","инвестиционное право, суверенное право государств, коммерческие права, интеллектуальная собственность"]
		}
	},
	"strings": {
		"share": ["Share", "Поделиться"],
		"subscribe": ["Subscribe", "Подписаться"],
		"previous_arg": ["Previous Argument", "Предыдущий аргумент"],
		"next_arg": ["Next Argument", "Следующий аргумент"],
		"report_an_issue": ["Report an Issue", "Сообщить о проблеме"],
		"references_accessed_on": ["References accessed on", "Источники информации доступны по состоянию на"],
		"read_more": ["Read More", "Читать далее"],
		"References": ["References", "Библиография"],
		
		"first_commit": ["Initial version", "Первая версия"],
		"Modified": ["Modified", "Изменен"],
		"History": ["History", "Архив"],
		"and": ["and", "и"],
		"Revisions": ["Revisions", "Редакции"],
		// "Modified on [Date] See [History] and [Revisions]"
		// "Изменен [Дата] Смотри [Архив] и [Редакции]"
		"auditLinkShort": ["Modified on {{date}}. See {{{revisionLink}}}", "Изменен {{date} Смотри {{{revisionLink}}}"],
		"auditLinkLong":  ["Modified on {{date}}. See {{{historyLink}}} and {{{revisionLink}}}", "Изменен {{date} Смотри {{{historyLink}}} и {{{revisionLink}}}"],
	}
}


import { writable } from 'svelte/store';

export const defaultInhalers = [
	{
		'brand name': 'ProAir Digihaler',
		generic: 'albuterol',
		composition: 'SABA',
		type: 'Digihaler',
		frequency: 'as needed',
		image: '/ProAir Digihaler.png',
		url: 'https://www.digihaler.com/'
	},
	{
		'brand name': 'ProAir HFA',
		generic: 'albuterol',
		composition: 'SABA',
		type: 'Metered dose inhaler',
		frequency: 'as needed',
		image: '/ProAir HFA.jpg',
		url: 'https://www.proair.com/hfa'
	},
	{
		'brand name': 'ProAir RespiClick',
		generic: 'albuterol',
		composition: 'SABA',
		type: 'Respiclick',
		frequency: 'as needed',
		image: '/ProAir RespiClick.png',
		url: 'https://www.proair.com/respiclick/about'
	},
	{
		'brand name': 'Proventil HFA',
		generic: 'albuterol',
		composition: 'SABA',
		type: 'Metered dose inhaler',
		frequency: 'as needed',
		image: '/Proventil HFA.jpg',
		url: ''
	},
	{
		'brand name': 'Ventolin HFA',
		generic: 'albuterol',
		composition: 'SABA',
		type: 'Metered dose inhaler',
		frequency: 'as needed',
		image: '/Ventolin HFA.jpg',
		url: 'https://www.ventolin.com/'
	},
	{
		'brand name': 'Xopenex HFA',
		generic: 'levalbuterol',
		composition: 'SABA',
		type: 'Metered dose inhaler',
		frequency: 'as needed',
		image: '/Xopenex HFA.jpg',
		url: ''
	},
	{
		'brand name': 'Serevent Diskus',
		generic: 'salmeterol',
		composition: 'LABA',
		type: 'Dry powder inhaler',
		frequency: '1 puff twice daily',
		image: '/Serevent Diskus.jpg',
		url: ''
	},
	{
		'brand name': 'Striverdi Respimat',
		generic: 'olodaterol',
		composition: 'LABA',
		type: 'Respimat',
		frequency: '2 puffs daily',
		image: '/Striverdi Respimat.jpg',
		url: 'https://www.boehringer-ingelheim.com/products/striverdi-respimat'
	},
	{
		'brand name': 'Alvesco HFA',
		generic: 'ciclesonide',
		composition: 'ICS',
		type: 'Metered dose inhaler',
		frequency: 'twice daily',
		image: '/Alvesco HFA.png',
		url: 'https://www.alvesco.us/'
	},
	{
		'brand name': 'ArmonAir Digihaler',
		generic: 'fluticasone',
		composition: 'ICS',
		type: 'Digihaler',
		frequency: 'twice daily',
		image: '/ArmonAir Digihaler.png',
		url: 'https://www.digihaler.com/'
	},
	{
		'brand name': 'Arnuity Ellipta',
		generic: 'fluticasone',
		composition: 'ICS',
		type: 'Ellipta',
		frequency: 'twice daily',
		image: '/Arnuity Ellipta.png',
		url: 'https://arnuity.com/'
	},
	{
		'brand name': 'Asmanex HFA',
		generic: 'mometasone',
		composition: 'ICS',
		type: 'Metered dose inhaler',
		frequency: 'twice daily',
		image: '/Asmanex HFA.png',
		url: 'https://www.asmanex.com/asmanex-hfa/'
	},
	{
		'brand name': 'Asmanex Twisthaler',
		generic: 'mometasone',
		composition: 'ICS',
		type: 'Twisthaler',
		frequency: 'once daily',
		image: '/Asmanex Twisthaler.png',
		url: ''
	},
	{
		'brand name': 'Flovent Diskus',
		generic: 'fluticasone',
		composition: 'ICS',
		type: 'Dry powder inhaler',
		frequency: 'twice daily',
		image: '/Flovent Diskus.jpg',
		url: 'https://www.flovent.com/'
	},
	{
		'brand name': 'Flovent HFA',
		generic: 'fluticasone',
		composition: 'ICS',
		type: 'Metered dose inhaler',
		frequency: 'twice daily',
		image: '/Flovent HFA.jpg',
		url: 'https://www.flovent.com/'
	},
	{
		'brand name': 'Pulmicort Flexhaler',
		generic: 'budesonide',
		composition: 'ICS',
		type: 'Flexhaler',
		frequency: 'twice daily',
		image: '/Pulmicort Flexhaler.jpg',
		url: 'https://www.pulmicortflexhaler.com/home.html'
	},
	{
		'brand name': 'QVAR Redihaler',
		generic: 'beclomethasone',
		composition: 'ICS',
		type: 'Metered dose inhaler',
		frequency: 'twice daily',
		image: '/QVAR Redihaler.jpg',
		url: 'https://www.qvar.com/'
	},
	{
		'brand name': 'Advair Diskus',
		generic: 'fluticasone-salmeterol',
		composition: 'ICS-LABA',
		type: 'Dry powder inhaler',
		frequency: 'twice daily',
		image: '/Advair Diskus.jpg',
		url: 'https://www.advair.com/'
	},
	{
		'brand name': 'Advair HFA',
		generic: 'fluticasone-salmeterol',
		composition: 'ICS-LABA',
		type: 'Metered dose inhaler',
		frequency: '2 puffs twice daily',
		image: '/Advair HFA.jpg',
		url: 'https://www.advair.com/'
	},
	{
		'brand name': 'Airduo Digihaler',
		generic: 'fluticasone-salmeterol',
		composition: 'ICS-LABA',
		type: 'Digihaler',
		frequency: 'as needed',
		image: '/Airduo Digihaler.png',
		url: 'https://www.digihaler.com/'
	},
	{
		'brand name': 'Airduo RespiClick',
		generic: 'fluticasone-salmeterol',
		composition: 'ICS-LABA',
		type: 'Respiclick',
		frequency: 'twice daily',
		image: '/Airduo RespiClick.jpg',
		url: 'https://hcp.myairduo.com/'
	},
	{
		'brand name': 'Breo Ellipta',
		generic: 'fluticasone-vilanterol',
		composition: 'ICS-LABA',
		type: 'Ellipta',
		frequency: '1 puff once daily',
		image: '/Breo Ellipta.jpg',
		url: 'https://www.mybreo.com/'
	},
	{
		'brand name': 'Dulera',
		generic: 'mometasone-formoterol',
		composition: 'ICS-LABA',
		type: 'Metered dose inhaler',
		frequency: '2 puffs twice daily',
		image: '/Dulera.jpg',
		url: 'https://www.dulera.com/'
	},
	{
		'brand name': 'Symbicort',
		generic: 'budesonide-formoterol',
		composition: 'ICS-LABA',
		type: 'Metered dose inhaler',
		frequency: '2 puffs twice daily',
		image: '/Symbicort.jpg',
		url: 'https://www.mysymbicort.com/',
		comment: `<p>With formoterol's fast onset of action, Symbicort can be used both PRN and as maintenaince medication.</p>`
	},
	{
		'brand name': 'Wixela',
		generic: 'fluticasone-propionate',
		composition: 'ICS-LABA',
		type: 'Dry powder inhaler',
		frequency: '1 puff twice daily',
		image: '/Wixela.png',
		url: 'https://www.wixela.com/',
		comment: '<p>Wixela is the ICS-LABA choice at VA.</p>'
	},
	{
		'brand name': 'Anoro Ellipta',
		generic: 'umeclidinium-vilanterol',
		composition: 'LABA-LAMA',
		type: 'Ellipta',
		frequency: '1 puff once daily',
		image: '/Anoro Ellipta.png',
		url: 'https://www.anoro.com/'
	},
	{
		'brand name': 'Bevespi Aerosphere',
		generic: 'glycopyrrolate-formoterol',
		composition: 'LABA-LAMA',
		type: 'Metered dose inhaler',
		frequency: '2 puffs twice daily',
		image: '/Bevespi Aerosphere.png',
		url: 'https://www.bevespi.com/'
	},
	{
		'brand name': 'Duaklir Pressair',
		generic: 'aclidinium-formoterol',
		composition: 'LABA-LAMA',
		type: 'Pressair',
		frequency: 'twice daily',
		image: '/Duaklir Pressair.jpg',
		url: ''
	},
	{
		'brand name': 'Stiolto Respimat',
		generic: 'tiotropium-olodaterol',
		composition: 'LABA-LAMA',
		type: 'Respimat',
		frequency: '2 puffs daily',
		image: '/Stiolto Respimat.jpg',
		url: 'https://www.stiolto.com/'
	},
	{
		'brand name': 'Trelegy Ellipta',
		generic: 'fluticasone-umeclidinium-vilanterol',
		composition: 'ICS-LABA-LAMA',
		type: 'Ellipta',
		frequency: '1 puff daily',
		image: '/Trelegy Ellipta.jpg',
		url: 'https://www.trelegy.com/'
	},
	{
		'brand name': 'Breztri Aerosphere',
		generic: 'budesonide-glycopyrrolate-formoterol',
		composition: 'ICS-LABA-LAMA',
		type: 'Metered dose inhaler',
		frequency: '2 puffs twice daily',
		image: '/Breztri Aerosphere.jpg',
		url: 'https://www.breztri.com/'
	},
	{
		'brand name': 'Atrovent HFA',
		generic: 'ipratropium',
		composition: 'SAMA',
		type: 'Metered dose inhaler',
		frequency: 'as needed',
		image: '/Atrovent HFA.png',
		url: ''
	},
	{
		'brand name': 'Incruse Ellipta',
		generic: 'umeclidinium',
		composition: 'LAMA',
		type: 'Ellipta',
		frequency: '1 puff daily',
		image: '/Incruse Ellipta.png',
		url: 'https://incruse.com/'
	},
	{
		'brand name': 'Spiriva Handihaler',
		generic: 'tiotropium',
		composition: 'LAMA',
		type: 'Dry powder inhaler',
		frequency: '1 capsule daily',
		image: '/Spiriva Handihaler.jpg',
		url: 'https://www.spiriva.com/copd/still-on-spiriva-handihaler/meet-the-mist'
	},
	{
		'brand name': 'Spiriva Respimat',
		generic: 'tiotropium',
		composition: 'LAMA',
		type: 'Respimat',
		frequency: '2 puffs daily',
		image: '/Spiriva Respimat.jpg',
		url: 'https://www.spiriva.com/copd/still-on-spiriva-handihaler/meet-the-mist'
	},
	{
		'brand name': 'Tudorza Pressair',
		generic: 'aclidinium',
		composition: 'LAMA',
		type: 'Pressair',
		frequency: '1 puff twice daily',
		image: '/Tudorza Pressair.png',
		url: 'https://www.tudorza.us/'
	},
	{
		'brand name': 'Combivent Respimat',
		generic: 'ipratropium-albuterol',
		composition: 'SABA-SAMA',
		type: 'Respimat',
		frequency: 'as needed',
		image: '/Combivent Respimat.jpg',
		url: 'https://www.combivent.com/'
	},
	{
		'brand name': 'Yupelri',
		generic: 'revefenacin',
		composition: 'LAMA',
		type: 'Nebulizer',
		frequency: 'once daily',
		image: '/Yupelri.png',
		url: 'https://www.yupelri.com/'
	},
	{
		'brand name': 'Duoneb',
		generic: 'ipratropium-albuterol',
		composition: 'SABA-SAMA',
		type: 'Nebulizer',
		frequency: 'as needed',
		image: '/duoneb.jpg',
		url: ''
	}
];

export const inhalers = writable(defaultInhalers);

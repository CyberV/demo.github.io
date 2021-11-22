/**
 * Data source
 */

 window.checkBoxData = [
    { id: 1, name: 'Australia', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'New South Wales' },
    { id: 3, pid: 1, name: 'Victoria' },
    { id: 4, pid: 1, name: 'South Australia' },
    { id: 6, pid: 1, name: 'Western Australia' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' },
    { id: 11, name: 'China', hasChild: true },
    { id: 12, pid: 11, name: 'Guangzhou' },
    { id: 13, pid: 11, name: 'Shanghai' },
    { id: 14, pid: 11, name: 'Beijing' },
    { id: 15, pid: 11, name: 'Shantou' },
    { id: 16, name: 'France', hasChild: true },
    { id: 17, pid: 16, name: 'Pays de la Loire' },
    { id: 18, pid: 16, name: 'Aquitaine' },
    { id: 19, pid: 16, name: 'Brittany' },
    { id: 20, pid: 16, name: 'Lorraine' },
    { id: 21, name: 'India', hasChild: true },
    { id: 22, pid: 21, name: 'Assam' },
    { id: 23, pid: 21, name: 'Bihar' },
    { id: 24, pid: 21, name: 'Tamil Nadu' },
    { id: 25, pid: 21, name: 'Punjab' }
];
// Hierarchical data source for TreeView component
window.hierarchicalData = [
{ id: '01', name: 'Local Disk (C:)', expanded: true,
    subChild: [
        {
            id: '01-01', name: 'Program Files',
            subChild: [
                { id: '01-01-01', name: 'Windows NT' },
                { id: '01-01-02', name: 'Windows Mail' },
                { id: '01-01-03', name: 'Windows Photo Viewer' },
            ]
        },
        {
            id: '01-02', name: 'Users', expanded: true,
            subChild: [
                { id: '01-02-01', name: 'Smith' },
                { id: '01-02-02', name: 'Public' },
                { id: '01-02-03', name: 'Admin' },
            ]
        },
        {
            id: '01-03', name: 'Windows',
            subChild: [
                { id: '01-03-01', name: 'Boot' },
                { id: '01-03-02', name: 'FileManager' },
                { id: '01-03-03', name: 'System32' },
            ]
        },
    ]
},
{ id: '02', name: 'Local Disk (D:)',
    subChild: [
        {
            id: '02-01', name: 'Personals',
            subChild: [
                { id: '02-01-01', name: 'My photo.png' },
                { id: '02-01-02', name: 'Rental document.docx' },
                { id: '02-01-03', name: 'Pay slip.pdf' },
            ]
        },
        {
            id: '02-02', name: 'Projects',
            subChild: [
                { id: '02-02-01', name: 'ASP Application' },
                { id: '02-02-02', name: 'TypeScript Application' },
                { id: '02-02-03', name: 'React Application' },
            ]
        },
        {
            id: '02-03', name: 'Office',
            subChild: [
                { id: '02-03-01', name: 'Work details.docx' },
                { id: '02-03-02', name: 'Weekly report.docx' },
                { id: '02-03-03', name: 'Wish list.csv' },
            ]
        },
    ]
},
{ id: '03', name: 'Local Disk (E:)', icon: 'folder',
    subChild: [
        {
            id: '03-01', name: 'Pictures',
            subChild: [
                { id: '03-01-01', name: 'Wind.jpg' },
                { id: '03-01-02', name: 'Stone.jpg' },
                { id: '03-01-03', name: 'Home.jpg' },
            ]
        },
        {
            id: '03-02', name: 'Documents',
            subChild: [
                { id: '03-02-01', name: 'Environment Pollution.docx' },
                { id: '03-02-02', name: 'Global Warming.ppt' },
                { id: '03-02-03', name: 'Social Network.pdf' },
            ]
        },
        {
            id: '03-03', name: 'Study Materials',
            subChild: [
                { id: '03-03-01', name: 'UI-Guide.pdf' },
                { id: '03-03-02', name: 'Tutorials.zip' },
                { id: '03-03-03', name: 'TypeScript.7z' },
            ]
        },
    ]
}
];
// Hierarchical data source for first TreeView component
window.productTeam1 = [
{
        id: 't1', name: 'ASP.NET MVC Team', expanded: true,
        child: [
            { id: 't2' , pid: 't1', name: 'Smith' },
            { id: 't3', pid: 't1', name: 'Johnson' },
            { id: 't4', pid: 't1', name: 'Anderson' },
        ]
    },
    {
        id: 't5', name: 'Windows Team',  expanded: true,
        child: [
            { id: 't6', pid: 't5', name: 'Clark' },
            { id: 't7', pid: 't5', name: 'Wright' },
            { id: 't8', pid: 't5', name: 'Lopez' },
        ]
    },
];
// Hierarchical data source for second TreeView component
window.productTeam2 = [
{
        id: 't9' , name: 'Web Team',expanded: true,
        child: [
            { id: 't11' , pid: 't9' , name: 'Joshua' },
            { id: 't12', pid: 't9' , name: 'Matthew' },
            { id: 't13', pid: 't9' , name: 'David' },
        ]
    },
    {
        id: 't14', name: 'Build Team', expanded: true,
        child: [
            { id: 't15' , pid: 't14' , name: 'Ryan' },
            { id: 't16' , pid: 't14' , name: 'Justin' },
            { id: 't17' , pid: 't14', name: 'Robert' },
        ]
    },
];
window.treeData = [
{
    id: 1, name: 'Discover Music', expanded: true,
    child: [
        { id: 2, name: 'Hot Singles' },
        { id: 3, name: 'Rising Artists' },
        { id: 4, name: 'Live Music' }
    ]
},
{
    id: 7, name: 'Sales and Events',
    child: [
        { id: 8, name: '100 Albums - $5 Each' },
        { id: 9, name: 'Hip-Hop and R&B Sale' },
        { id: 10, name: 'CD Deals' }
    ]
},
{
    id: 11, name: 'Categories',
    child: [
        { id: 12, name: 'Songs' },
        { id: 13, name: 'Bestselling Albums' },
        { id: 14, name: 'New Releases' },
        { id: 15, name: 'Bestselling Songs' }
    ]
},
{
    id: 16, name: 'MP3 Albums',
    child: [
        { id: 17, name: 'Rock' },
        { id: 18, name: 'Gospel' },
        { id: 19, name: 'Latin Music' },
        { id: 20, name: 'Jazz' }
    ]
},
{
    id: 21, name: 'More in Music',
    child: [
        { id: 22, name: 'Music Trade-In' },
        { id: 23, name: 'Redeem a Gift Card' },
        { id: 24, name: 'Band T-Shirts' }
    ]
}
];
window.treeViewData = [
{
    nodeId: '01', nodeText: 'Music', icon: 'folder',
    nodeChild: [
        { nodeId: '01-01', nodeText: 'Gouttes.mp3', icon: 'audio' }
    ]
},
{
    nodeId: '02', nodeText: 'Videos', icon: 'folder',
    nodeChild: [
        { nodeId: '02-01', nodeText: 'Naturals.mp4', icon: 'video' },
        { nodeId: '02-02', nodeText: 'Wild.mpeg', icon: 'video' },
    ]
},
{
    nodeId: '03', nodeText: 'Documents', icon: 'folder',
    nodeChild: [
        { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icon: 'docx' },
        { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icon: 'docx' },
        { nodeId: '03-03', nodeText: 'Global Warming.ppt', icon: 'ppt' },
        { nodeId: '03-04', nodeText: 'Social Network.pdf', icon: 'pdf' },
        { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icon: 'pdf' },
    ]
},
{
    nodeId: '04', nodeText: 'Pictures', icon: 'folder', expanded: true,
    nodeChild: [
        {
            nodeId: '04-01', nodeText: 'Camera Roll', icon: 'folder', expanded: true,
            nodeChild: [
                { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', image: '//ej2.syncfusion.com/javascript/demos/src/treeview/images/employees/9.png' },
                { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', image: '//ej2.syncfusion.com/javascript/demos/src/treeview/images/employees/3.png' },
            ]
        },
        { nodeId: '04-02', nodeText: 'Wind.jpg', icon: 'images' },
        { nodeId: '04-03', nodeText: 'Stone.jpg', icon: 'images' },
    ]
},
{
    nodeId: '05', nodeText: 'Downloads', icon: 'folder',
    nodeChild: [
        { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icon: 'pdf' },
        { nodeId: '05-02', nodeText: 'Tutorials.zip', icon: 'zip' },
        { nodeId: '05-03', nodeText: 'Game.exe', icon: 'exe' },
        { nodeId: '05-04', nodeText: 'TypeScript.7z', icon: 'zip' },
    ]
},
];
window.continentData = [
{
    code: 'NA', name: 'North America', expanded: true, countries: [
        { code: 'USA', name: 'United States of America', selected: true },
        { code: 'CUB', name: 'Cuba' },
        { code: 'MEX', name: 'Mexico' }
    ]
},
{
    code: 'AF', name: 'Africa', countries: [
        { code: 'NGA', name: 'Nigeria' },
        { code: 'EGY', name: 'Egypt' },
        { code: 'ZAF', name: 'South Africa' }
    ]
},
{
    code: 'AS', name: 'Asia', countries: [
        { code: 'CHN', name: 'China' },
        { code: 'IND', name: 'India' },
        { code: 'JPN', name: 'Japan' }
    ]
},
{
    code: 'EU', name: 'Europe', countries: [
        { code: 'DNK', name: 'Denmark' },
        { code: 'FIN', name: 'Finland' },
        { code: 'AUT', name: 'Austria' }
    ]
},
{
    code: 'SA', name: 'South America', countries: [
        { code: 'BRA', name: 'Brazil' },
        { code: 'COL', name: 'Colombia' },
        { code: 'ARG', name: 'Argentina' }
    ]
},
{
    code: 'OC', name: 'Oceania', countries: [
        { code: 'AUS', name: 'Australia' },
        { code: 'NZL', name: 'New Zealand' },
        { code: 'WSM', name: 'Samoa' }
    ]
},
{
    code: 'AN', name: 'Antarctica', countries: [
        { code: 'BVT', name: 'Bouvet Island' },
        { code: 'ATF', name: 'French Southern Lands' }
    ]
},
];
window.localData = [
{ id: 1, name: 'Discover Music', hasChild: true, expanded: true },
{ id: 2, pid: 1, name: 'Hot Singles', selected: true },
{ id: 3, pid: 1, name: 'Rising Artists' },
{ id: 4, pid: 1, name: 'Live Music' },
{ id: 7, name: 'Sales and Events', hasChild: true },
{ id: 8, pid: 7, name: '100 Albums - $5 Each' },
{ id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
{ id: 10, pid: 7, name: 'CD Deals' },
{ id: 11, name: 'Categories', hasChild: true },
{ id: 12, pid: 11, name: 'Songs' },
{ id: 13, pid: 11, name: 'Bestselling Albums' },
{ id: 14, pid: 11, name: 'New Releases' },
{ id: 15, pid: 11, name: 'Bestselling Songs' },
{ id: 16, name: 'MP3 Albums', hasChild: true },
{ id: 17, pid: 16, name: 'Rock' },
{ id: 18, pid: 16, name: 'Gospel' },
{ id: 19, pid: 16, name: 'Latin Music' },
{ id: 20, pid: 16, name: 'Jazz' },
{ id: 21, name: 'More in Music', hasChild: true },
{ id: 22, pid: 21, name: 'Music Trade-In' },
{ id: 23, pid: 21, name: 'Redeem a Gift Card' },
{ id: 24, pid: 21, name: 'Band T-Shirts' },
{ id: 25, name: 'Fiction Book Lists', hasChild: true },
{ id: 26, pid: 25, name: 'To Kill a Mockingbird' },
{ id: 27, pid: 25, name: 'Pride and Prejudice' },
{ id: 28, pid: 25, name: 'Harry Potter' },
{ id: 29, pid: 25, name: 'The Hobbit' },
];
window.mailBox = [
{ id: 1, name: 'Favorites', hasChild: true },
        { id: 2, pid: 1, name: 'Sales Reports', count: '4' },
        { id: 3, pid: 1, name: 'Sent Items' },
        { id: 4, pid: 1, name: 'Marketing Reports ', count: '6' },
        { id: 5, name: 'My Folder', hasChild: true, expanded: true },
        { id: 6, pid: 5, name: 'Inbox', selected: true, count: '20' },
        { id: 7, pid: 5, name: 'Drafts', count: '5' },
        { id: 8, pid: 5, name: 'Deleted Items' },
        { id: 9, pid: 5, name: 'Sent Items' },
        { id: 10, pid: 5, name: 'Sales Reports', count: '4' },
        { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
        { id: 13, pid: 5, name: 'Outbox' },
];




window.ColorMapping = [
    {"Name": "Greenland", "Area": 2130800, "Population": 56483, "Location": "North America" },
    {"Name": "New Guinea", "Area":785753, "Population": 1306940, "Location": "Oceania"},
    {"Name": "Borneo", "Area":743330, "Population": 19804064, "Location":"Asia" },
    {"Name": "Madagascar", "Area": 587713, "Population": 22005222, "Location": "Africa"},
    {"Name": "Baffin Island", "Area":507451, "Population":10745, "Location": "North America" },
    {"Name": "Sumatra", "Area": 443066, "Population":50000000, "Location": "Asia"},
    {"Name": "Honshu", "Area":225800, "Population": 103000000, "Location": "Asia"},
    {"Name": "Victoria Island", "Area":217291, "Population": 1875, "Location": "North America"},
    {"Name": "Great Britain", "Area":209331, "Population":60800000, "Location":"Europe" },
    {"Name": "Ellesmere Island", "Area": 183965, "Population": 146, "Location": "North America"}
];
window.Airport_Count = [
        { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
        { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
        { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
        { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
        { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
        { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
        { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
        { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
        { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
        { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
        { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
        { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
        { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
        { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
    ];
	


window.CarSales = [
    {Continent: "China", Company: "Volkswagen", Sales: 3005994 },
    {Continent: "China", Company: "General Motors", Sales: 1230044 },
    {Continent: "China", Company: "Honda", Sales: 1197023 },
    {Continent: "United States", Company: "General Motors", Sales:3042775  },
    {Continent: "United States", Company: "Ford", Sales:2599193  },
    {Continent: "United States", Company: "Toyota", Sales:2449587  },
    {Continent: "Japan",Company: "Toyota", Sales:1527977  },
    {Continent: "Japan", Company: "Honda", Sales:706982 },
    {Continent: "Japan", Company: "Suzuki", Sales:623041  },
    {Continent: "Germany",Company: "Volkswagen", Sales:655977  },
    {Continent: "Germany", Company: "Mercedes", Sales:310845  },
    {Continent: "Germany", Company: "BMW", Sales:261931  },
    { Continent: "United Kingdom", Company: "Ford ", Sales:319442  },
	{Continent: "United Kingdom", Company: "Vauxhall", Sales: 251146 },
    { Continent: "United Kingdom", Company: "Volkswagen", Sales:206994  },
    {Continent: "India", Company: "Maruti Suzuki", Sales:1443654  },
     {Continent: "India", Company: "Hyundai", Sales:476241  },
    {Continent: "India", Company: "Mahindra", Sales:205041  },
    {Continent: "France", Company: "Renault", Sales:408183 },
    {Continent: "France", Company: "Peugeot", Sales:336242 },
    {Continent: "France", Company: "Citroen", Sales:194986  },
    { Continent: "Brazil", Company: "Flat Chrysler", Sales:368842  },
    { Continent: "Brazil", Company: "General Motors", Sales: 348351 },
    { Continent: "Brazil", Company: "Volkswagen", Sales: 245895 },
    {Continent: "Italy", Company: "Flat Chrysler", Sales:386260  },
    {Continent: "Italy", Company: "Volkswagen", Sales: 138984 },
    {Continent: "Italy", Company: "Ford", Sales: 125144 },
    {Continent: "Canada", Company: "Ford", Sales:305086},
    {Continent: "Canada", Company: "FCA", Sales:278011 },
    {Continent: "Canada", Company: "GM", Sales: 266884 },
];



window.Country_Population =[
    { Country:"China", Population:1388232693},
    
    { Country:"India", Population:1342512706},
    
    { Country:"United States of America", Population:326474013},
    
    { Country:"Indonesia", Population:263510146},
    
    { Country:"Brazil",  Population:211243220},
    
    { Country:"Pakistan", Population:196744376},
    
    { Country:"Nigeria", Population:191835936},
    
    { Country:"Bangladesh", Population:164827718},
    
    { Country:"Russian Federation", Population:143375006},
    
    { Country:"Mexico", Population:130222815},
    
    { Country:"Japan", Population:126045211},
    
    { Country:"Ethiopia", Population:104344901},
    
    { Country:"Philippines", Population:103796832},
    
    { Country:"Viet Nam", Population:95414640},
    
    { Country:"Egypt", Population:95215102},
    
    { Country:"D.R. Congo", Population:82242685},
    
    { Country:"Iran", Population:80945718},
    
    { Country:"Germany", Population:80636124},
    
    { Country:"Turkey", Population:80417526},
    
    { Country:"Thailand", Population:68297547},
    
    { Country:"United Kingdom", Population:65511098},
    
    { Country:"France", Population:64938716},
    
    { Country:"Italy", Population:59797978},
    
    { Country:"Tanzania", Population:56877529},
    
    { Country:"South Africa", Population:55436360},
    
    { Country:"Myanmar", Population:54836483},
    
    { Country:"Republic of Korea", Population:50704971},
    
    { Country:"Colombia", Population:49067981},
    
    { Country:"Kenya", Population:48466928},
    
    { Country:"Spain", Population:46070146},
    
    { Country:"Ukraine", Population:44405055},
    
    { Country:"Argentina", Population:44272125},
    
    { Country:"Sudan", Population:42166323},
    
    { Country:"Uganda", Population:41652938},
    
    { Country:"Algeria", Population:41063753},
    
    { Country:"Iraq", Population:38654287},
    
    { Country:"Poland", Population:38563573},
    
    { Country:"Canada", Population:36626083},
    
    { Country:"Morocco", Population:35241418},
    
    { Country:"Afghanistan", Population:34169169},
    
    { Country:"Saudi Arabia", Population:32742664},
    
    { Country:"Peru", Population:32166473},
    
    { Country:"Venezuela", Population:31925705},
    
    { Country:"Malaysia", Population:31164177},
    
    { Country:"Uzbekistan", Population:30690914},
    
    { Country:"Mozambique", Population:29537914},
    
    { Country:"Nepal", Population:29187037},
    
    { Country:"Ghana", Population:28656723},
    
    { Country:"Yemen", Population:28119546},
    
    { Country:"Angola", Population:26655513},
    
    { Country:"Madagascar", Population:25612972},
    
    { Country:"Dem Peoples Republic of Korea", Population:25405296},
    
    { Country:"Australia", Population:24641662},
    
    { Country:"Cameroon", Population:24513689},
    
    { Country:"Côte dIvoire", Population:23815886},
    
    { Country:"Taiwan", Population:23405309},
    
    { Country:"Niger", Population:21563607},
    
    { Country:"Sri Lanka", Population:20905335},
    
    { Country:"Romania", Population:19237513},
    
    { Country:"Burkina Faso", Population:19173322},
    
    { Country:"Syrian Arab Republic", Population:18906907},
    
    { Country:"Mali", Population:18689966},
    
    { Country:"Chile", Population:18313495},
    
    { Country:"Malawi", Population:18298679},
    
    { Country:"Kazakhstan", Population:18064470},
    
    { Country:"Zambia", Population:17237931},
    
    { Country:"Netherlands", Population:17032845},
    
    { Country:"Guatemala", Population:17005497},
    
    { Country:"Ecuador", Population:16625776},
    
    { Country:"Zimbabwe", Population:16337760},
    
    { Country:"Cambodia", Population:16076370},
    
    { Country:"Senegal", Population:16054275},
    
    { Country:"Chad", Population:14965482},
    
    { Country:"Guinea", Population:13290659},
    
    { Country:"South Sudan", Population:13096190},
    
    { Country:"Rwanda", Population:12159586},
    
    { Country:"Burundi", Population:11936481},
    
    { Country:"Tunisia", Population:11494760},
    
    { Country:"Benin", Population:11458611},
    
    { Country:"Belgium", Population:11443830},
    
    { Country:"Somalia", Population:11391962},
    
    { Country:"Cuba", Population:11390184},
    
    { Country:"Bolivia", Population:11052864},
    
    { Country:"Haiti", Population:10983274},
    
    { Country:"Greece", Population:10892931},
    
    { Country:"Dominican Republic", Population:10766564},
    
    { Country:"Czech Republic", Population:10555130},
    
    { Country:"Portugal", Population:10264797},
    
    { Country:"Azerbaijan", Population:9973697},
    
    { Country:"Sweden", Population:9920624},
    
    { Country:"Hungary", Population:9787905},
    
    { Country:"Belarus", Population:9458535},
    
    { Country:"United Arab Emirates", Population:9397599},
    
    { Country:"Tajikistan", Population:8858115},
    
    { Country:"Serbia", Population:8776940},
    
    { Country:"Austria", Population:8592400},
    
    { Country:"Switzerland", Population:8454083},
    
    { Country:"Israel", Population:8323248},
    
    { Country:"Honduras", Population:8304677},
    
    { Country:"Papua New Guinea", Population:7933841},
    
    { Country:"Jordan", Population:7876703},
    
    { Country:"Togo", Population:7691915},
    
    { Country:"China Hong Kong SAR", Population:7401941},
    
    { Country:"Bulgaria", Population:7045259},
    
    { Country:"Laos", Population:7037521},
    
    { Country:"Paraguay", Population:6811583},
    
    { Country:"Sierra Leone", Population:6732899},
    
    { Country:"Libya", Population:6408742},
    
    { Country:"Nicaragua", Population:6217796},
    
    { Country:"El Salvador", Population:6167147},
    
    { Country:"Kyrgyzstan", Population:6124945},
    
    { Country:"Lebanon", Population:6039277},
    
    { Country:"Singapore", Population:5784538},
    
    { Country:"Denmark", Population:5711837},
    
    { Country:"Finland", Population:5541274},
    
    { Country:"Turkmenistan", Population:5502586},
    
    { Country:"Eritrea", Population:5481906},
    
    { Country:"Slovakia", Population:5432157},
    
    { Country:"Norway", Population:5330800},
    
    { Country:"Central African Republic", Population:5098826},
    
    { Country:"State of Palestine", Population:4928225},
    
    { Country:"Costa Rica", Population:4905626},
    
    { Country:"Congo", Population:4866243},
    
    { Country:"Ireland", Population:4749153},
    
    { Country:"Oman", Population:4741305},
    
    { Country:"Liberia", Population:4730437},
    
    { Country:"New Zealand", Population:4604871},
    
    { Country:"Mauritania", Population:4266448},
    
    { Country:"Croatia", Population:4209815},
    
    { Country:"Kuwait", Population:4099932},
    
    { Country:"Republic of Moldova", Population:4054640},
    
    { Country:"Panama", Population:4051284},
    
    { Country:"Georgia", Population:3972532},
    
    { Country:"Bosnia and Herzegovina", Population:3792759},
    
    { Country:"Puerto Rico", Population:3679086},
    
    { Country:"Uruguay", Population:3456877},
    
    { Country:"Mongolia", Population:3051900},
    
    { Country:"Armenia", Population:3031670},
    
    { Country:"Albania", Population:2911428},
    
    { Country:"Lithuania", Population:2830582},
    
    { Country:"Jamaica", Population:2813285},
    
    { Country:"Namibia", Population:2568569},
    
    { Country:"Botswana", Population:2343981},
    
    { Country:"Qatar", Population:2338085},
    
    { Country:"Lesotho", Population:2185159},
    
    { Country:"Gambia", Population:2120418},
    
    { Country:"TFYR Macedonia", Population:2083308},
    
    { Country:"Slovenia", Population:2071252},
    
    { Country:"Latvia", Population:1944565},
    
    { Country:"Guinea-Bissau", Population:1932871},
    
    { Country:"Gabon", Population:1801232},
    
    { Country:"Bahrain", Population:1418895},
    
    { Country:"Trinidad and Tobago", Population:1369157},
    
    { Country:"Swaziland", Population:1320356},
    
    { Country:"Estonia", Population:1305755},
    
    { Country:"Mauritius", Population:1281353},
    
    { Country:"Timor-Leste", Population:1237251},
    
    { Country:"Cyprus", Population:1187575},
    
    { Country:"Djibouti", Population:911382},
    
    { Country:"Fiji", Population:902547},
    
    { Country:"Equatorial Guinea", Population:894464},
    
    { Country:"Réunion", Population:873356},
    
    { Country:"Comoros", Population:825920},
    
    { Country:"Bhutan", Population:792877},
    
    { Country:"Guyana", Population:774407},
    
    { Country:"Montenegro", Population:626250},
    
    { Country:"China Macao SAR", Population:606384},
    
    {Country:"Solomon Islands", Population:606215},
    
    { Country:"Western Sahara", Population:596021},
    
    { Country:"Luxembourg", Population:584103},
    
    { Country:"Suriname", Population:552112},
    
    { Country:"Cabo Verde", Population:533468},
    
    { Country:"Guadeloupe", Population:472462},
    
    { Country:"Brunei Darussalam", Population:434448},
    
    { Country:"Malta", Population:420521},
    
    { Country:"Bahamas", Population:397164},
    
    { Country:"Martinique", Population:396071},
    
    { Country:"Maldives", Population:375867},
    
    { Country:"Belize", Population:374651},
    
    { Country:"Iceland", Population:334303},
    
    { Country:"French Polynesia", Population:288685},
    
    { Country:"Barbados", Population:285744},
    
    { Country:"French Guiana", Population:282761},
    
    { Country:"Vanuatu", Population:276331},
    
    { Country:"New Caledonia", Population:269736},
    
    { Country:"Mayotte", Population:253068},
    
    { Country:"Sao Tome and Principe", Population:198481},
    
    { Country:"Samoa", Population:195743},
    
    { Country:"Saint Lucia", Population:187768},
    
    { Country:"Guam", Population:174214},
    
    { Country:"Channel Islands", Population:165235},
    
    { Country:"Curaçao", Population:159987},
    
    { Country:"Kiribati", Population:116405},
    
    { Country:"Saint Vincent and the Grenadines", Population:109895},
    
    { Country:"Grenada", Population:107850},
    
    { Country:"Tonga", Population:107797},
    
    { Country:"United States Virgin Islands", Population:106574},
    
    { Country:"Micronesia (Fed. States of)", Population:105566},
    
    { Country:"Aruba", Population:104588},
    
    { Country:"Seychelles", Population:97539},
    
    { Country:"Antigua and Barbuda", Population:93659},
   
   ];


window.Drilldown = [
    { Continent: [
            { Name: "Africa", Population: 1216130000, States: [
                    { Name: "Eastern Africa", Population: 410637987, Region: [
                            { Name: "Ethiopia", Population: 107534882 },
                            { Name: "Tanzania", Population: 59091392 },
                            { Name: "Kenya", Population: 50950879 },
                            { Name: "Uganda", Population: 44270563 },
                            { Name: "Mozambique", Population: 30528673 },
                            { Name: "Madagascar", Population: 26262810 },
                            { Name: "Malawi", Population: 19164728 },
                            { Name: "Zambia", Population: 17609178 },
                            { Name: "Zimbabwe", Population: 16913261 },
                            { Name: "Somalia", Population: 15181925 },
                            { Name: "South, Sudan", Population: 12919053 },
                            { Name: "Rwanda", Population: 12501156 },
                            { Name: "Burundi", Population: 11216450 },
                            { Name: "Eritrea", Population: 5187948 },
                            { Name: "Mauritius", Population: 1268315 },
                            { Name: "Djibouti", Population: 971408 },
                            { Name: "Réunion", Population: 883247 },
                            { Name: "Comoros", Population: 832347 },
                            { Name: "Mayotte", Population: 259682 },
                            { Name: "Seychelles", Population: 95235 },
                        ] },
                    { Name: "Middle Africa", Population: 158562976, Region: [
                            { Name: "Democratic, Republic of the Congo", Population: 84004989 },
                            { Name: "Angola", Population: 30774205 },
                            { Name: "Cameroon", Population: 24678234 },
                            { Name: "Chad", Population: 15353184 },
                            { Name: "Congo", Population: 5399895 },
                            { Name: "Central African, Republic", Population: 4737423 },
                            { Name: "Gabon", Population: 2067561 },
                            { Name: "Equatorial Guinea", Population: 1313894 },
                            { Name: "Sao Tome and Principe", Population: 208818 },
                        ] },
                    { Name: "Northern Africa", Population: 229385603, Region: [
                            { Name: "Egypt", Population: 99375741 },
                            { Name: "Algeria", Population: 42008054 },
                            { Name: "Sudan", Population: 41511526 },
                            { Name: "Morocco", Population: 36191805 },
                            { Name: "Tunisia", Population: 11659174 },
                            { Name: "Libya", Population: 6470956 },
                            { Name: "Western, Sahara", Population: 567421 },
                        ] },
                    { Name: "Southern Africa", Population: 64292365, Region: [
                            { Name: "South Africa", Population: 57398421 },
                            { Name: "Namibia", Population: 2587801 },
                            { Name: "Botswana", Population: 2333201 },
                            { Name: "Lesotho", Population: 2263010 },
                            { Name: "Swaziland", Population: 1391385 },
                        ] },
                    { Name: "Western Africa", Population: 362201579, Region: [
                            { Name: "Nigeria", Population: 195875237 },
                            { Name: "Ghana", Population: 29463643 },
                            { Name: "Côte d'Ivoire", Population: 24905843 },
                            { Name: "Niger", Population: 22311375 },
                            { Name: "Burkina Faso", Population: 19751651 },
                            { Name: "Mali", Population: 19107706 },
                            { Name: "Senegal", Population: 16294270 },
                            { Name: "Guinea", Population: 13052608 },
                            { Name: "Benin", Population: 11485674 },
                            { Name: "Togo", Population: 7990926 },
                            { Name: "Sierra Leone", Population: 7719729 },
                            { Name: "Liberia", Population: 4853516 },
                            { Name: "Mauritania", Population: 4540068 },
                            { Name: "Gambia", Population: 2163765 },
                            { Name: "Guinea-Bissau", Population: 1907268 },
                            { Name: "Cabo Verde", Population: 553335 },
                            { Name: "Saint Helena", Population: 4074 },
                        ] },
                ]
            }
        ]
    },
    { Continent: [
            {
                Name: "Asia", Population: 4436224000, States: [
                    { Name: "Central Asia", Population: 69787760, Region: [
                            { Name: "Uzbekistan", Population: 32364996 },
                            { Name: "Kazakhstan", Population: 18403860 },
                            { Name: "Tajikistan", Population: 9107211 },
                            { Name: "Kyrgyzstan", Population: 6132932 },
                            { Name: "Turkmenistan", Population: 5851466 },
                        ] },
                    { Name: "Eastern Asia", Population: 1641908531, Region: [
                            { Name: "China", Population: 1415045928 },
                            { Name: "Japan", Population: 127185332 },
                            { Name: "South Korea", Population: 51164435 },
                            { Name: "North Korea", Population: 25610672 },
                            { Name: "Taiwan", Population: 23694089 },
                            { Name: "Hong Kong", Population: 7428887 },
                            { Name: "Mongolia", Population: 3121772 },
                            { Name: "Macao", Population: 632418 },
                        ] },
                    { Name: "Southeastern Asia", Population: 641775797, Region: [
                            { Name: "Indonesia", Population: 266794980 },
                            { Name: "Philippines", Population: 106512074 },
                            { Name: "Viet Nam", Population: 96491146 },
                            { Name: "Thailand", Population: 69183173 },
                            { Name: "Myanmar", Population: 53855735 },
                            { Name: "Malaysia", Population: 32042458 },
                            { Name: "Cambodia", Population: 16245729 },
                            { Name: "Laos", Population: 6961210 },
                            { Name: "Singapore", Population: 5791901 },
                            { Name: "Timor-Leste", Population: 1324094 },
                            { Name: "Brunei Darussalam", Population: 434076 },
                        ] },
                    { Name: "Southern Asia", Population: 1846266634, Region: [
                            { Name: "India", Population: 1354051854 },
                            { Name: "Pakistan", Population: 200813818 },
                            { Name: "Bangladesh", Population: 166368149 },
                            { Name: "Iran", Population: 82011735 },
                            { Name: "Afghanistan", Population: 36373176 },
                            { Name: "Nepal", Population: 29624035 },
                            { Name: "Sri Lanka", Population: 20950041 },
                            { Name: "Bhutan", Population: 817054 },
                            { Name: "Maldives", Population: 444259 },
                        ] },
                    { Name: "Western Asia", Population: 262938009, Region: [
                            { Name: "Turkey", Population: 81916871 },
                            { Name: "Iraq", Population: 39339753 },
                            { Name: "Saudi Arabia", Population: 33554343 },
                            { Name: "Yemen", Population: 28915284 },
                            { Name: "Syria", Population: 18284407 },
                            { Name: "Azerbaijan", Population: 9923914 },
                            { Name: "Jordan", Population: 9903802 },
                            { Name: "United Arab Emirates", Population: 9541615 },
                            { Name: "Israel", Population: 8452841 },
                            { Name: "Lebanon", Population: 6093509 },
                            { Name: "State of Palestine", Population: 5052776 },
                            { Name: "Oman", Population: 4829946 },
                            { Name: "Kuwait", Population: 4197128 },
                            { Name: "Georgia", Population: 3907131 },
                            { Name: "Armenia", Population: 2934152 },
                            { Name: "Qatar", Population: 2694849 },
                            { Name: "Bahrain", Population: 1566993 },
                            { Name: "Cyprus", Population: 1189085 },
                        ] },
                ]
            }
        ]
    },
    { Continent: [
            {
                Name: "North America", Population: 579024000, States: [
                    { Name: "Central America", Population: 174988756, Region: [
                            { Name: "Mexico", Population: 130759074 },
                            { Name: "Guatemala", Population: 17245346 },
                            { Name: "Honduras", Population: 9417167 },
                            { Name: "El, Salvador", Population: 6411558 },
                            { Name: "Nicaragua", Population: 6284757 },
                            { Name: "Costa, Rica", Population: 4953199 },
                            { Name: "Panama", Population: 4162618 },
                            { Name: "Belize", Population: 382444 },
                        ] },
                    { Name: "Northern America", Population: 358593810, Region: [
                            { Name: "U.S.", Population: 322179605 },
                            { Name: "Canada", Population: 36953765 },
                            { Name: "Bermuda", Population: 61070 },
                            { Name: "Greenland", Population: 56565 },
                            { Name: "Saint Pierre & Miquelon", Population: 6342 },
                        ] },
                ]
            }
        ]
    },
    {
        Continent: [
            {
                Name: "South America", Population: 422535000, States: [
                    { Name: "Brazil", Population: 204519000 },
                    { Name: "Colombia", Population: 48549000 },
                    { Name: "Argentina", Population: 43132000 },
                    { Name: "Peru", Population: 31153000 },
                    { Name: "Venezuela", Population: 30620000 },
                    { Name: "Chile", Population: 18006000 },
                    { Name: "Ecuador", Population: 16279000 },
                    { Name: "Bolivia", Population: 10520000 },
                    { Name: "Paraguay", Population: 7003000 },
                    { Name: "Uruguay", Population: 3310000 },
                    { Name: "Guyana", Population: 747000 },
                    { Name: "Suriname", Population: 560000 },
                    { Name: "French Guiana", Population: 262000 },
                    { Name: "Falkland Islands", Population: 3000 },
                ]
            },
        ]
    },
    { Continent: [
            {
                Name: "Europe", Population: 738849000, States: [
                    { Name: "Eastern Europe", Population: 291953328, Region: [
                            { Name: "Russia", Population: 143964709 },
                            { Name: "Ukraine", Population: 44009214 },
                            { Name: "Poland", Population: 38104832 },
                            { Name: "Romania", Population: 19580634 },
                            { Name: "Crech, Republic", Population: 10625250 },
                            { Name: "Hungary", Population: 9688847 },
                            { Name: "Belarus", Population: 9452113 },
                            { Name: "Bulgaria", Population: 7036848 },
                            { Name: "Slovakia", Population: 5449816 },
                            { Name: "Moldova", Population: 4041065 },
                        ] },
                    { Name: "Northern Europe", Population: 103642971, Region: [
                            { Name: "United Kingdom", Population: 66573504 },
                            { Name: "Sweden", Population: 9982709 },
                            { Name: "Denmark", Population: 5754356 },
                            { Name: "Finland", Population: 5542517 },
                            { Name: "Norway", Population: 5353363 },
                            { Name: "Ireland", Population: 4803748 },
                            { Name: "Lithuania", Population: 2876475 },
                            { Name: "Latvia", Population: 1929938 },
                            { Name: "Estonia", Population: 1306788 },
                            { Name: "Iceland", Population: 337780 },
                            { Name: "Channel Islands", Population: 166083 },
                            { Name: "Isle of Man", Population: 84831 },
                            { Name: "Faeroe Islands", Population: 49489 },
                        ] },
                    { Name: "Southern Europe", Population: 152172107, Region: [
                            { Name: "Italy", Population: 59290969 },
                            { Name: "Spain", Population: 46397452 },
                            { Name: "Greece", Population: 11142161 },
                            { Name: "Portugal", Population: 10291196 },
                            { Name: "Serbia", Population: 8762027 },
                            { Name: "Croatia", Population: 4164783 },
                            { Name: "Bosnia and Herzegovina", Population: 3503554 },
                            { Name: "Albania", Population: 2934363 },
                            { Name: "Macedonia", Population: 2085051 },
                            { Name: "Slovenia", Population: 2081260 },
                            { Name: "Montenegro", Population: 629219 },
                            { Name: "Malta", Population: 432089 },
                            { Name: "Andorra", Population: 76953 },
                            { Name: "Gibraltar", Population: 34733 },
                            { Name: "San Marino", Population: 33557 },
                            { Name: "Holy, See", Population: 801 },
                        ] },
                    { Name: "Western Europe", Population: 92746859, Region: [
                            { Name: "Germany", Population: 82293457 },
                            { Name: "France", Population: 65233271 },
                            { Name: "Netherlands", Population: 17084459 },
                            { Name: "Belgium", Population: 11498519 },
                            { Name: "Austria", Population: 8751820 },
                            { Name: "Switzerland", Population: 8544034 },
                            { Name: "Luxembourg", Population: 590321 },
                            { Name: "Monaco", Population: 38897 },
                            { Name: "Liechtenstein", Population: 38155 },
                        ] },
                ]
            }
        ]
    }
];
  
 

window.econmics =[
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},	 
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},	 
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},	 
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},	 
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},	 
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},	 
    {State:"India", GDP:2073, percentage:13.65, Rank:7},	 
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},	 
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},	 
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}	 
     
	 ];
 

window.electionData = 
[
    {  State: "Alabama", Trump:62.9,Clinton:34.6, WinPercentage: 62.9,Winner:"Trump", Population : 4780127 },
    {  State: "Alaska", Trump:52.9,Clinton:37.7,  WinPercentage: 52.9,Winner:"Trump", Population : 710249},
    {  State: "Arkansas", Trump:60.6,Clinton:33.7,  WinPercentage:60.6,Winner:"Trump", Population : 2915958 },
    {  State: "Arizona", Trump:49.5,Clinton:45.4,  WinPercentage:49.5,Winner:"Trump", Population : 6392307 },
    {  State: "California",  Trump:32.8,Clinton:61.6,  WinPercentage: 61.6,Winner:"Clinton", Population : 37252895},
    {  State: "Colorado",  Trump:47.3,Clinton:44.4,  WinPercentage: 47.3,Winner:"Trump", Population : 5029324 },
    {  State: "Connecticut",  Trump:41.2,Clinton:54.5,  WinPercentage: 54.5,Winner:"Clinton", Population : 3574118},
    {  State: "Delaware",  Trump:53.4,Clinton:41.9,  WinPercentage: 53.4,Winner:"Trump", Population : 897936 },
    {  State: "District of Columbia",   Trump:4.1,Clinton:92.8,  WinPercentage: 92.8,Winner:"Clinton", Population : 693972 },
    {  State: "Florida", Trump:49.1,Clinton:47.8 ,  WinPercentage: 49.1,Winner:"Trump",  Population : 18804623},
    {  State: "Georgia", Trump:51.3,Clinton:45.6 ,  WinPercentage:51.3,Winner:"Trump",  Population : 9688681},
    {  State: "Hawaii",  Trump:62.2,Clinton:30,  WinPercentage:62.2,Winner:"Trump",  Population : 1360301 },
    {  State: "Idaho", Trump:59.2,Clinton:27.6 ,  WinPercentage: 59.2,Winner:"Trump",  Population : 1567652 },
    {  State: "Illinois",  Trump:55.4,Clinton:39.4,  WinPercentage: 55.4,Winner:"Trump",  Population : 12831549  },
    {  State: "Indiana", Trump:57.2,Clinton:37.9 ,  WinPercentage:57.2,Winner:"Trump",  Population : 6484229 },
    {  State: "Iowa", Trump:51.8,Clinton:42.2,  WinPercentage:51.8,Winner:"Trump",  Population : 3046869  },
    {  State: "Kansas", Trump:57.2,Clinton:36.2,  WinPercentage:57.2,Winner:"Trump",  Population : 2853132, },
    {  State: "Kentucky", Trump:62.5,Clinton:32.7 ,  WinPercentage:62.5,Winner:"Trump",  Population : 4339349 },
    {  State: "Louisiana", Trump:58.1,Clinton:38.4 ,  WinPercentage:58.1,Winner:"Trump",  Population : 4533479 },
    {  State: "Maine",  Trump:45.2,Clinton:47.9 ,  WinPercentage:47.9,Winner:"Clinton",  Population : 1328361},
    {  State: "Maryland",  Trump:35.3,Clinton:60.5 ,  WinPercentage:60.5,Winner:"Clinton",  Population : 5773785 },
    {  State: "Massachusetts",  Trump:33.5,Clinton:60.8,  WinPercentage:60.8,Winner:"Clinton",  Population : 6547817 },
    {  State: "Michigan", Trump:47.6,Clinton:47.3 ,  WinPercentage:47.6,Winner:"Trump",  Population : 9884129 },
    {  State: "Minnesota",  Trump:45.4,Clinton:46.9,  WinPercentage:46.9,Winner:"Trump",  Population : 5303925 },
    {  State: "Mississippi", Trump:58.3,Clinton:39.7,  WinPercentage:58.3,Winner:"Trump",  Population : 2968103  },
    {  State: "Missouri", Trump:57.1,Clinton:38.0,  WinPercentage:57.1,Winner:"Trump",  Population : 5988927  },
    {  State: "Montana", Trump:56.5,Clinton:36.0,  WinPercentage: 56.5,Winner:"Trump",  Population : 989417 },
    {  State: "Nebraska", Trump:60.3,Clinton:34.0 ,  WinPercentage:60.3,Winner:"Trump",  Population : 1826341 },
    {  State: "Nevada",  Trump:45.5,Clinton:47.9,  WinPercentage:47.9,Winner:"Clinton",  Population : 2700691  },
    {  State: "New Hampshire",  Trump:47.2,Clinton:47.6 ,  WinPercentage: 47.6,Winner:"Clinton",  Population : 1316466 },
    {  State: "New Jersey",  Trump:41.8,Clinton:55.0,  WinPercentage:55,Winner:"Clinton",  Population : 8791936},
    {  State: "New Mexico",  Trump:40.0,Clinton:48.3 ,  WinPercentage:48.3,Winner:"Clinton",  Population : 2059192 },
    {  State: "New York",  Trump:37.5,Clinton:58.8 ,  WinPercentage:58.8,Winner:"Clinton",  Population : 19378087},
    {  State: "North Carolina", Trump:50.5,Clinton:46.7,  WinPercentage:50.5,Winner:"Trump",  Population : 9535692 },
    {  State: "North Dakota", Trump:64.1,Clinton:27.8,   WinPercentage:64.1,Winner:"Trump", Population : 672591 },
    {  State: "Ohio", Trump:52.1,Clinton:43.5,   WinPercentage:52.5,Winner:"Trump", Population : 11536725 },
    {  State: "Oklahoma", Trump:65.3,Clinton:28.9,  WinPercentage: 65.3,Winner:"Trump",  Population : 3751616 },
    {  State: "Oregon",  Trump:41.1,Clinton:51.7,  WinPercentage:51.7,Winner:"Clinton",  Population : 3831073  },
    {  State: "Pennsylvania", Trump:48.8,Clinton:47.6 ,  WinPercentage: 48.8,Winner:"Trump",  Population : 12702887},
    {  State: "Rhode Island",  Trump:39.8,Clinton:55.4,  WinPercentage: 55.4,Winner:"Clinton",  Population : 1052931 },
    {  State: "South Carolina", Trump:54.9,Clinton:40.8,  WinPercentage:54.9,Winner:"Trump",  Population : 4625401},
    {  State: "South Dakota", Trump:61.5,Clinton:31.7,  WinPercentage: 61.5,Winner:"Trump",  Population : 814191 },
    {  State: "Tennessee", Trump:61.1,Clinton:34.9,  WinPercentage:61.1,Winner:"Trump",  Population : 6346275},
    {  State: "Texas", Trump:52.6,Clinton:43.4,  WinPercentage:52.6,Winner:"Trump",  Population : 25146105 },
    {  State: "Utah", Trump:45.9,Clinton:27.8,  WinPercentage:45.9,Winner:"Trump",  Population : 2763888, },
    {  State: "Vermont",  Trump:39.7,Clinton:61.1,   WinPercentage:61.1,Winner:"Clinton", Population : 625745 },
    {  State: "Virginia",  Trump:45.0,Clinton:49.9 ,  WinPercentage:49.9,Winner:"Clinton",  Population : 8001045},
    {  State: "Washington",  Trump:4.1,Clinton:92.8 ,  WinPercentage:92.8,Winner:"Clinton",  Population : 6724543 },
    {  State: "Wisconsin", Trump:68.7,Clinton:26.5 ,  WinPercentage:68.7,Winner:"Trump",  Population : 5687289},
    {  State: "West Virginia", Trump:47.9,Clinton:46.9,  WinPercentage:47.9,Winner:"Clinton",  Population : 1853011 },
    {  State: "Wyoming", Trump:70.1,Clinton:22.5,  WinPercentage:70.1,Winner:"Trump",  Population : 583767 }
   
    ];
	
window.importData = [
    { dataType: "Import", type: "Animal products", product: "2010", sales: 20839332874 },
    { dataType: "Import", type: "Animal products", product: "2011", sales: 23098635589 },
    { dataType: "Import", type: "Chemical products", product: "2010", sales: 141637951510 },
    { dataType: "Import", type: "Chemical products", product: "2011", sales: 161550338209 },
    { dataType: "Import", type: "Base metals", product: "2010", sales: 86079439944 },
    { dataType: "Import", type: "Base metals", product: "2011", sales: 103821671535 },
    { dataType: "Import", type: "Textile articles", product: "2010", sales: 97126140830 },
    { dataType: "Import", type: "Textile articles", product: "2011", sales: 104980750811 },
    { dataType: "Export", type: "Animal products", product: "2010", sales: 15845503378 },
    { dataType: "Export", type: "Animal products", product: "2011", sales: 20650111620 },
    { dataType: "Export", type: "Chemical products", product: "2010", sales: 136100054087 },
    { dataType: "Export", type: "Chemical products", product: "2011", sales: 146341672411 },
    { dataType: "Export", type: "Base metals", product: "2010", sales: 59060592813 },
    { dataType: "Export", type: "Base metals", product: "2011", sales: 71785882641 },
    { dataType: "Export", type: "Textile articles", product: "2010", sales: 20982380561 },
    { dataType: "Export", type: "Textile articles", product: "2011", sales: 26016143783 }

		];

window.Metals =[
    { Sport: "Swimming", Gold: 16, GameImage: 'swimming.svg', ItemHeight: "180px", ItemWidth: '180px' },
    { Sport: "Athletics", Gold: 13, GameImage: 'athletics.svg', ItemHeight: "70px", ItemWidth: '70px' },
    { Sport: "Gymnastics", Gold: 4, GameImage: 'gymnastics.svg', ItemHeight: "80px", ItemWidth: '80px' },
    { Sport: "Cycling", Gold: 2, GameImage: 'cycling.svg', ItemHeight: "50px", ItemWidth: '50px' },
    { Sport: "Wrestling", Gold: 2, GameImage: 'wrestling.svg', ItemHeight: "60px", ItemWidth: '50px' },
    { Sport: "Basketball", Gold: 2, GameImage: 'basketball.svg', ItemHeight: "50px", ItemWidth: '50px' },
    { Sport: "Boxing", Gold: 1, GameImage: 'boxing.svg', ItemHeight: "40px", ItemWidth: '30px' },
    { Sport: "Tennis", Gold: 1, GameImage: 'tennis.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Judo", Gold: 1, GameImage: 'judo.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Rowing", Gold: 1, GameImage: 'rowing.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Shooting", Gold: 1, GameImage: 'shooting.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Triathlon", Gold: 1, GameImage: 'triathlon.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Water polo", Gold: 1, GameImage: 'water-polo.svg', ItemHeight: "40px", ItemWidth: '40px' }
	];
 

window.Continent_Data = [
        { Continent: 'Africa', Gender: 'Male', Population: 518636010, Id: "AfricaMale", PieHeight: '90px', PieWidth: '90px' },
        { Continent: 'Africa', Gender: 'Female', Population: 519058499, Id: "AfricaFemale", PieHeight: '90px', PieWidth: '90px' },
        { Continent: 'Asia', Gender: 'Male', Population: 2131947122, Id: "AsiaMale", PieHeight: '160px', PieWidth: '160px' },
        { Continent: 'Asia', Gender: 'Female', Population: 2043385632, Id: "AsiaFemale", PieHeight: '160px', PieWidth: '160px' },
        { Continent: 'Europe', Gender: 'Male', Population: 353542772, Id: "EuropeMale", PieHeight: '90px', PieWidth: '90px' },
        { Continent: 'Europe', Gender: 'Female', Population: 380686199, Id: "EuropeFemale", PieHeight: '90px', PieWidth: '90px' },
        { Continent: 'North America', Gender: 'Male', Population: 171213918, Id: "NorthAmericaMale", PieHeight: '60px', PieWidth: '60px' },
        { Continent: 'North America', Gender: 'Female', Population: 176175064, Id: "NorthAmericaFemale", PieHeight: '60px', PieWidth: '60px' },
        { Continent: 'Oceania', Gender: 'Male', Population: 176995465, Id: "OceniaMale", PieHeight: '60px', PieWidth: '60px' },
        { Continent: 'Oceania', Gender: 'Female', Population: 174631245, Id: "OceniaFemale", PieHeight: '60px', PieWidth: '60px' },
        { Continent: 'South America', Gender: 'Male', Population: 197745352, Id: "SouthAmericaMale", PieHeight: '60px', PieWidth: '60px' },
        { Continent: 'South America', Gender: 'Female', Population: 190045352, Id: "SouthAmericaFemale", PieHeight: '60px', PieWidth: '60px' },
];
window.Percentage_Population = [
    { Continent: 'Africa', Data1: 40.3, Data2: 56.3, Data3: 3.4 },

    { Continent: 'Asia', Data1: 25.1, Data2: 67.8, Data3: 7.1 },

    { Continent: 'Europe', Data1: 15.3, Data2: 68.3, Data3: 16.4 },

    { Continent: 'North America', Data1: 19.6, Data2: 67, Data3: 13.4 },

    { Continent: 'Oceania', Data1: 22.8, Data2: 65.9, Data3: 11.4 },

    { Continent: 'South America', Data1: 26.8, Data2: 66.1, Data3: 7.1 },

];
window.PercentageOfPopulation = [

    { Continent: 'Africa Male', Data1: 40.8, Data2: 56.2, Data3: 3.0 },
    { Continent: 'Africa Female', Data1: 39.9, Data2: 56.4, Data3: 3.7 },
    { Continent: 'Asia Male', Data1: 25.8, Data2: 67.7, Data3: 6.5 },
    { Continent: 'Asia Female', Data1: 24.4, Data2: 67.8, Data3: 7.8 },
    { Continent: 'Europe Male', Data1: 16.3, Data2: 70.2, Data3: 13.5 },
    { Continent: 'Europe Female', Data1: 14.4, Data2: 66.5, Data3: 19.1 },
    { Continent: 'North America Male', Data1: 20.4, Data2: 67.9, Data3: 11.8 },
    { Continent: 'North America Female', Data1: 19.0, Data2: 66.1, Data3: 15 },
    { Continent: 'Oceania Male', Data1: 23.2, Data2: 66.4, Data3: 10.5 },
    { Continent: 'Oceania Female', Data1: 22.4, Data2: 65.3, Data3: 12.3 },
    { Continent: 'South America Male', Data1: 27.7, Data2: 66.2, Data3: 6.2 },
    { Continent: 'South America Female', Data1: 26.0, Data2: 66, Data3: 8 },

];


window.ProductSale =[
    {Product:" Samsung", Percentage:22},
    {Product:"Apple", Percentage:11.2},
    {Product:"Huawei", Percentage:10.5},
    {Product:"Oppo", Percentage:8.4},
    {Product:"Vivo", Percentage:6.6},
    {Product:"Xiaomi", Percentage:6.3},
    {Product:"LG", Percentage:3.6},
    {Product:"ZTE", Percentage:3.3},
    {Product:"Lenovo", Percentage:3.2},
    {Product:"Alcate", Percentage:1.3}
    ];

window.RTLData = [
    {
        Continent: [
            {
                Name: "Africa", Size: 519.70, Country: [
                    { Name: "The Gambia", Size: 29.80 },
                    { Name: "Lesotho", Size: 29.20 },
                    { Name: "South Africa", Size: 27.30 },
                    { Name: "Swaziland", Size: 25.70 },
                    { Name: "Mozambique", Size: 24.50 },
                    { Name: "Namibia", Size: 22.30 },
                    { Name: "Comoros", Size: 20.10 },
                    { Name: "Gabon", Size: 18.50 },
                    { Name: "Botswana", Size: 18.10 },
                    { Name: "Libya", Size: 17.70 },
                    { Name: "Tunisia", Size: 14.70 },
                    { Name: "Sao Tome and principe", Size: 13.70 },
                    { Name: "Congo", Size: 11.40 },
                    { Name: "Kenya", Size: 11.00 },
                    { Name: "Monocco", Size: 10.80 },
                    { Name: "Cabo Verde", Size: 10.70 },
                    { Name: "Sudan", Size: 13.30 },
                    { Name: "Mauritania", Size: 10.20 },
                    { Name: "Mauritius", Size: 7.40 },
                    { Name: "Zambia", Size: 7.40 },
                    { Name: "Equatorial Guinea", Size: 6.70 },
                    { Name: "Malawi", Size: 6.70 },
                    { Name: "Mali", Size: 9.70 },
                    { Name: "Eritrea", Size: 6.60 },
                    { Name: "Togo", Size: 6.20 },
                    { Name: "Djibouti", Size: 6.10 },
                    { Name: "Guinea-Bissau", Size: 6.10 },
                    { Name: "Somalia", Size: 6.00 },
                    { Name: "Algeria", Size: 11.70 },
                    { Name: "Senegal", Size: 9.50 },
                    { Name: "Central African Republic", Size: 6.40 },
                    { Name: "Chad", Size: 5.80 },
                    { Name: "Ethiopia", Size: 5.40 },
                    { Name: "Zimbabwe", Size: 5.30 },
                    { Name: "Cameroon", Size: 4.50 },
                    { Name: "Guinea", Size: 6.30 },
                    { Name: "Ghana", Size: 5.80 },
                    { Name: "Liberia", Size: 4.00 },
                    { Name: "Burkina Faso", Size: 3.00 },
                    { Name: "Sierra Leone", Size: 2.80 },
                    { Name: "Tanzania", Size: 2.70 },
                    { Name: "Egypt", Size: 11.60 },
                    { Name: "Cote d'Ivoire", Size: 9.20 },
                    { Name: "Angolia", Size: 6.20 },
                    { Name: "Nigeria", Size: 5.50 },
                    { Name: "Dem.Rep.Congo", Size: 3.60 },
                    { Name: "Niger", Size: 2.60 },
                    { Name: "Madagascar", Size: 2.40 },
                    { Name: "Uganda", Size: 2.30 },
                    { Name: "Rwanda", Size: 2.60 },
                    { Name: "Burundi", Size: 1.60 },
                    { Name: "Benin", Size: 1.00 }
                ]
            }
        ]
    },
    {
        Continent: [
            {
                Name: "Asia", Size: 184.80, Country: [
                    { Name: "Armenia", Size: 17.40 },
                    { Name: "Tajikistan", Size: 10.80 },
                    { Name: "Afghanistan", Size: 8.50 },
                    { Name: "Pakistan", Size: 5.90 },
                    { Name: "Philippines", Size: 5.70 },
                    { Name: "Indonesia", Size: 5.60 },
                    { Name: "Kazakhstan", Size: 5.40 },
                    { Name: "Georgia", Size: 11.50 },
                    { Name: "Uzbekistan", Size: 8.70 },
                    { Name: "Kyrgyz Republic", Size: 7.80 },
                    { Name: "Russia", Size: 5.30 },
                    { Name: "Sri Lanka", Size: 4.60 },
                    { Name: "Dem.People's Rep.Korea", Size: 4.20 },
                    { Name: "Timor-Leste", Size: 4.10 },
                    { Name: "Brunai", Size: 6.40 },
                    { Name: "Azerbaijan", Size: 5.10 },
                    { Name: "Bangladesh", Size: 4.00 },
                    { Name: "Hong Kong SAR, China", Size: 3.50 },
                    { Name: "Malaysia", Size: 3.40 },
                    { Name: "Nepal", Size: 3.20 },
                    { Name: "Iran", Size: 11.40 },
                    { Name: "Turkmenistan", Size: 8.60 },
                    { Name: "Mongalia", Size: 6.40 },
                    { Name: "China", Size: 4.60 },
                    { Name: "Korea", Size: 3.70 },
                    { Name: "Japan", Size: 2.90 },
                    { Name: "Macao SAR, China", Size: 2.20 },
                    { Name: "Vietnam", Size: 2.20 },
                    { Name: "India", Size: 3.60 },
                    { Name: "Bhutan", Size: 2.40 },
                    { Name: "Singapore", Size: 2.10 },
                    { Name: "Lao PDR", Size: 1.50 },
                    { Name: "Myanmar", Size: 0.80 },
                    { Name: "Thailand", Size: 1.00 },
                    { Name: "Cambodia", Size: 0.30 }
                ]
            }
        ]
    },
    {
        Continent: [
            {
                Name: "South America", Size: 94.50, Country: [
                    { Name: "Brazil", Size: 13.40 },
                    { Name: "Guyana", Size: 11.50 },
                    { Name: "Colombia", Size: 9.10 },
                    { Name: "Suri Name", Size: 8.90 },
                    { Name: "Uruguay", Size: 8.30 },
                    { Name: "Argentina", Size: 8.10 },
                    { Name: "Chile", Size: 6.90 },
                    { Name: "Peru", Size: 6.80 },
                    { Name: "Venezuela", Size: 7.30 },
                    { Name: "Paraguay", Size: 5.50 },
                    { Name: "Ecuador", Size: 5.20 },
                    { Name: "Bolivia", Size: 3.50 }
                ]
            }
        ]
    },
    {
        Continent: [
            {
                Name: "Europe", Size: 361.10, Country: [
                    { Name: "Bosnia and Herzegovina", Size: 25.80 },
                    { Name: "Macedonia", Size: 24.40 },
                    { Name: "Greece", Size: 23.10 },
                    { Name: "Montenegro", Size: 17.70 },
                    { Name: "Spain", Size: 17.40 },
                    { Name: "Italy", Size: 11.60 },
                    { Name: "Portugal", Size: 9.90 },
                    { Name: "Latvia", Size: 9.40 },
                    { Name: "Slovak Republic", Size: 9.00 },
                    { Name: "Ukraine", Size: 9.00 },
                    { Name: "Albania", Size: 15.00 },
                    { Name: "Croatia", Size: 11.50 },
                    { Name: "Finland", Size: 8.60 },
                    { Name: "Estonia", Size: 7.30 },
                    { Name: "Sweden", Size: 7.20 },
                    { Name: "Denmark", Size: 6.30 },
                    { Name: "Serbia", Size: 14.40 },
                    { Name: "Turkey", Size: 11.40 },
                    { Name: "Lithuania", Size: 8.10 },
                    { Name: "Ireland", Size: 6.20 },
                    { Name: "Bulgaria", Size: 6.00 },
                    { Name: "Luxembourg", Size: 6.00 },
                    { Name: "Romania", Size: 5.90 },
                    { Name: "Slovenia", Size: 7.50 },
                    { Name: "Austria", Size: 5.70 },
                    { Name: "Malta", Size: 4.80 },
                    { Name: "Switzerland", Size: 4.50 },
                    { Name: "Moldova", Size: 4.40 },
                    { Name: "Poland", Size: 5.10 },
                    { Name: "United Kingdom", Size: 4.70 },
                    { Name: "Hungary", Size: 4.20 },
                    { Name: "Czech Republic", Size: 3.40 },
                    { Name: "Cyprus", Size: 11.90 },
                    { Name: "France", Size: 9.90 },
                    { Name: "Belgium", Size: 7.40 },
                    { Name: "Netherland", Size: 4.90 },
                    { Name: "Norway", Size: 4.50 },
                    { Name: "Germany", Size: 3.80 },
                    { Name: "Iceland", Size: 2.70 },
                    { Name: "Belarus", Size: 0.50 }
                ]
            }
        ]
    },
    {
        Continent: [
            {
                Name: "Central America and the Caribean", Size: 170.60, Country: [
                    { Name: "Dominican Republic", Size: 13.80 },
                    { Name: "Bahamas", Size: 12.60 },
                    { Name: "Puerto Rico", Size: 12.30 },
                    { Name: "Haiti", Size: 13.40 },
                    { Name: "Barbados", Size: 11.40 },
                    { Name: "Costa Rica", Size: 8.50 },
                    { Name: "El Salvador", Size: 6.90 },
                    { Name: "Jamaica", Size: 13.00 },
                    { Name: "Belize", Size: 11.40 },
                    { Name: "Nicaragua", Size: 6.20 },
                    { Name: "Panama", Size: 4.70 },
                    { Name: "Honduras", Size: 5.70 },
                    { Name: "Trinidad and Tobago", Size: 4.40 },
                    { Name: "Cuba", Size: 2.60 },
                    { Name: "Guatemala", Size: 2.60 }
                ]
            }
        ]
    },
    {
        Continent: [
            {
                Name: "Middle East", Size: 101.90, Country: [
                    { Name: "Oman", Size: 16.90 },
                    { Name: "Yemen", Size: 16.00 },
                    { Name: "Jordan", Size: 14.90 },
                    { Name: "Syrian Arab Republic", Size: 14.20 },
                    { Name: "Lebanon", Size: 6.70 },
                    { Name: "Saudi Arabia", Size: 5.50 },
                    { Name: "Iraq", Size: 14.80 },
                    { Name: "Israel", Size: 4.40 },
                    { Name: "United Arab Emirates", Size: 3.80 },
                    { Name: "Kuwait", Size: 2.40 },
                    { Name: "Bahrain", Size: 1.20 },
                    { Name: "Qatar", Size: 0.30 }
                ]
            }
        ]
    }
];

window.countries = [
{ id: 1, name: 'Australia', hasChild: true, expanded: true },
{ id: 2, parentId: 1, name: 'New South Wales' },
{ id: 3, parentId: 1, name: 'Victoria', isSelected: true },
{ id: 4, parentId: 1, name: 'South Australia', isSelected: true },
{ id: 6, parentId: 1, name: 'Western Australia' },
{ id: 7, name: 'Brazil', hasChild: true },
{ id: 8, parentId: 7, name: 'Paraná' },
{ id: 9, parentId: 7, name: 'Ceará' },
{ id: 10, parentId: 7, name: 'Acre' },
{ id: 11, name: 'China', hasChild: true },
{ id: 12, parentId: 11, name: 'Guangzhou' },
{ id: 13, parentId: 11, name: 'Shanghai' },
{ id: 14, parentId: 11, name: 'Beijing' },
{ id: 15, parentId: 11, name: 'Shantou' },
{ id: 16, name: 'France', hasChild: true },
{ id: 17, parentId: 16, name: 'Pays de la Loire' },
{ id: 18, parentId: 16, name: 'Aquitaine' },
{ id: 19, parentId: 16, name: 'Brittany' },
{ id: 20, parentId: 16, name: 'Lorraine' },
{ id: 21, name: 'India', hasChild: true },
{ id: 22, parentId: 21, name: 'Assam' },
{ id: 23, parentId: 21, name: 'Bihar' },
{ id: 24, parentId: 21, name: 'Tamil Nadu' },
{ id: 25, parentId: 21, name: 'Punjab' }
];


 window.kanbanData = [
    {
        "Id": "Task 1",
        "Title": "Task - 29001",
        "Status": "Open",
        "Summary": "Analyze the new requirements gathered from the customer.",
        "Type": "Story",
        "Priority": "Low",
        "Tags": "Analyze,Customer",
        "Estimate": 3.5,
        "Assignee": "Nancy Davloio",
        "RankId": 1,
        "Color": "#02897B",
        "ClassName": "e-story, e-low, e-nancy-davloio"
    },
    {
        "Id": "Task 2",
        "Title": "Task - 29002",
        "Status": "InProgress",
        "Summary": "Improve application performance",
        "Type": "Improvement",
        "Priority": "Normal",
        "Tags": "Improvement",
        "Estimate": 6,
        "Assignee": "Andrew Fuller",
        "RankId": 1,
        "Color": "#673AB8",
        "ClassName": "e-improvement, e-normal, e-andrew-fuller"
    },
    {
        "Id": "Task 3",
        "Title": "Task - 29003",
        "Status": "Open",
        "Summary": "Arrange a web meeting with the customer to get new requirements.",
        "Type": "Others",
        "Priority": "Critical",
        "Tags": "Meeting",
        "Estimate": 5.5,
        "Assignee": "Janet Leverling",
        "RankId": 2,
        "Color": "#1F88E5",
        "ClassName": "e-others, e-critical, e-janet-leverling"
    },
    {
        "Id": "Task 4",
        "Title": "Task - 29004",
        "Status": "InProgress",
        "Summary": "Fix the issues reported in the IE browser.",
        "Type": "Bug",
        "Priority": "Critical",
        "Tags": "IE",
        "Estimate": 2.5,
        "Assignee": "Janet Leverling",
        "RankId": 2,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-release, e-janet-leverling"
    },
    {
        "Id": "Task 5",
        "Title": "Task - 29005",
        "Status": "Review",
        "Summary": "Fix the issues reported by the customer.",
        "Type": "Bug",
        "Priority": "Low",
        "Tags": "Customer",
        "Estimate": "3.5",
        "Assignee": "Steven walker",
        "RankId": 1,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-low, e-steven-walker"
    },
    {
        "Id": "Task 6",
        "Title": "Task - 29007",
        "Status": "Validate",
        "Summary": "Validate new requirements",
        "Type": "Improvement",
        "Priority": "Low",
        "Tags": "Validation",
        "Estimate": 1.5,
        "Assignee": "Robert King",
        "RankId": 1,
        "Color": "#673AB8",
        "ClassName": "e-improvement, e-low, e-robert-king"
    },
    {
        "Id": "Task 7",
        "Title": "Task - 29009",
        "Status": "Review",
        "Summary": "Fix the issues reported in Safari browser.",
        "Type": "Bug",
        "Priority": "Critical",
        "Tags": "Fix,Safari",
        "Estimate": 1.5,
        "Assignee": "Nancy Davloio",
        "RankId": 2,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-release, e-nancy-davloio"
    },
    {
        "Id": "Task 8",
        "Title": "Task - 29010",
        "Status": "Close",
        "Summary": "Test the application in the IE browser.",
        "Type": "Story",
        "Priority": "Low",
        "Tags": "Review,IE",
        "Estimate": 5.5,
        "Assignee": "Margaret hamilt",
        "RankId": 3,
        "Color": "#02897B",
        "ClassName": "e-story, e-low, e-margaret-hamilt"
    },
    {
        "Id": "Task 9",
        "Title": "Task - 29011",
        "Status": "Validate",
        "Summary": "Validate the issues reported by the customer.",
        "Type": "Story",
        "Priority": "High",
        "Tags": "Validation,Fix",
        "Estimate": 1,
        "Assignee": "Steven walker",
        "RankId": 1,
        "Color": "#02897B",
        "ClassName": "e-story, e-high, e-steven-walker"
    },
    {
        "Id": "Task 10",
        "Title": "Task - 29015",
        "Status": "Open",
        "Summary": "Show the retrieved data from the server in grid control.",
        "Type": "Story",
        "Priority": "High",
        "Tags": "Database,SQL",
        "Estimate": 5.5,
        "Assignee": "Margaret hamilt",
        "RankId": 4,
        "Color": "#02897B",
        "ClassName": "e-story, e-high, e-margaret-hamilt"
    },
    {
        "Id": "Task 11",
        "Title": "Task - 29016",
        "Status": "InProgress",
        "Summary": "Fix cannot open user’s default database SQL error.",
        "Priority": "Critical",
        "Type": "Bug",
        "Tags": "Database,Sql2008",
        "Estimate": 2.5,
        "Assignee": "Janet Leverling",
        "RankId": 4,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-critical, e-janet-leverling"
    },
    {
        "Id": "Task 12",
        "Title": "Task - 29017",
        "Status": "Review",
        "Summary": "Fix the issues reported in data binding.",
        "Type": "Story",
        "Priority": "Normal",
        "Tags": "Databinding",
        "Estimate": "3.5",
        "Assignee": "Janet Leverling",
        "RankId": 4,
        "Color": "#02897B",
        "ClassName": "e-story, e-normal, e-janet-leverling"
    },
    {
        "Id": "Task 13",
        "Title": "Task - 29018",
        "Status": "Close",
        "Summary": "Analyze SQL server 2008 connection.",
        "Type": "Story",
        "Priority": "Critical",
        "Tags": "Grid,Sql",
        "Estimate": 2,
        "Assignee": "Andrew Fuller",
        "RankId": 4,
        "Color": "#02897B",
        "ClassName": "e-story, e-release, e-andrew-fuller"
    },
    {
        "Id": "Task 14",
        "Title": "Task - 29019",
        "Status": "Validate",
        "Summary": "Validate databinding issues.",
        "Type": "Story",
        "Priority": "Low",
        "Tags": "Validation",
        "Estimate": 1.5,
        "Assignee": "Margaret hamilt",
        "RankId": 1,
        "Color": "#02897B",
        "ClassName": "e-story, e-low, e-margaret-hamilt"
    },
    {
        "Id": "Task 15",
        "Title": "Task - 29020",
        "Status": "Close",
        "Summary": "Analyze grid control.",
        "Type": "Story",
        "Priority": "High",
        "Tags": "Analyze",
        "Estimate": 2.5,
        "Assignee": "Margaret hamilt",
        "RankId": 5,
        "Color": "#02897B",
        "ClassName": "e-story, e-high, e-margaret-hamilt"
    },
    {
        "Id": "Task 16",
        "Title": "Task - 29021",
        "Status": "Close",
        "Summary": "Stored procedure for initial data binding of the grid.",
        "Type": "Others",
        "Priority": "Critical",
        "Tags": "Databinding",
        "Estimate": 1.5,
        "Assignee": "Steven walker",
        "RankId": 6,
        "Color": "#1F88E5",
        "ClassName": "e-others, e-release, e-steven-walker"
    },
    {
        "Id": "Task 17",
        "Title": "Task - 29022",
        "Status": "Close",
        "Summary": "Analyze stored procedures.",
        "Type": "Story",
        "Priority": "Critical",
        "Tags": "Procedures",
        "Estimate": 5.5,
        "Assignee": "Janet Leverling",
        "RankId": 7,
        "Color": "#02897B",
        "ClassName": "e-story, e-release, e-janet-leverling"
    },
    {
        "Id": "Task 18",
        "Title": "Task - 29023",
        "Status": "Validate",
        "Summary": "Validate editing issues.",
        "Type": "Story",
        "Priority": "Critical",
        "Tags": "Editing",
        "Estimate": 1,
        "Assignee": "Nancy Davloio",
        "RankId": 1,
        "Color": "#02897B",
        "ClassName": "e-story, e-critical, e-nancy-davloio"
    },
    {
        "Id": "Task 19",
        "Title": "Task - 29024",
        "Status": "Review",
        "Summary": "Test editing functionality.",
        "Type": "Story",
        "Priority": "Normal",
        "Tags": "Editing,Test",
        "Estimate": 0.5,
        "Assignee": "Nancy Davloio",
        "RankId": 5,
        "Color": "#02897B",
        "ClassName": "e-story, e-normal, e-nancy-davloio"
    },
    {
        "Id": "Task 20",
        "Title": "Task - 29025",
        "Status": "Open",
        "Summary": "Enhance editing functionality.",
        "Type": "Improvement",
        "Priority": "Low",
        "Tags": "Editing",
        "Estimate": 3.5,
        "Assignee": "Andrew Fuller",
        "RankId": 5,
        "Color": "#673AB8",
        "ClassName": "e-improvement, e-low, e-andrew-fuller"
    },
    {
        "Id": "Task 21",
        "Title": "Task - 29026",
        "Status": "InProgress",
        "Summary": "Improve the performance of the editing functionality.",
        "Type": "Epic",
        "Priority": "High",
        "Tags": "Performance",
        "Estimate": 6,
        "Assignee": "Nancy Davloio",
        "RankId": 5,
        "Color": "#e91e64",
        "ClassName": "e-epic, e-high, e-nancy-davloio"
    },
    {
        "Id": "Task 22",
        "Title": "Task - 29027",
        "Status": "Open",
        "Summary": "Arrange web meeting with the customer to show editing demo.",
        "Type": "Others",
        "Priority": "High",
        "Tags": "Meeting,Editing",
        "Estimate": 5.5,
        "Assignee": "Steven walker",
        "RankId": 6,
        "Color": "#1F88E5",
        "ClassName": "e-others, e-high, e-steven-walker"
    },
    {
        "Id": "Task 23",
        "Title": "Task - 29029",
        "Status": "Review",
        "Summary": "Fix the editing issues reported by the customer.",
        "Type": "Bug",
        "Priority": "Low",
        "Tags": "Editing,Fix",
        "Estimate": "3.5",
        "Assignee": "Janet Leverling",
        "RankId": 6,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-low, e-janet-leverling"
    },
    {
        "Id": "Task 24",
        "Title": "Task - 29030",
        "Status": "Testing",
        "Summary": "Fix the issues reported by the customer.",
        "Type": "Bug",
        "Priority": "Critical",
        "Tags": "Customer",
        "Estimate": "3.5",
        "Assignee": "Steven walker",
        "RankId": 1,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-critical, e-steven-walker"
    },
    {
        "Id": "Task 25",
        "Title": "Task - 29031",
        "Status": "Testing",
        "Summary": "Fix the issues reported in Safari browser.",
        "Type": "Bug",
        "Priority": "Critical",
        "Tags": "Fix,Safari",
        "Estimate": 1.5,
        "Assignee": "Nancy Davloio",
        "RankId": 2,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-release, e-nancy-davloio"
    },
    {
        "Id": "Task 26",
        "Title": "Task - 29032",
        "Status": "Testing",
        "Summary": "Check Login page validation.",
        "Type": "Story",
        "Priority": "Critical",
        "Tags": "Testing",
        "Estimate": 0.5,
        "Assignee": "Michael Suyama",
        "RankId": 3,
        "Color": "#02897B",
        "ClassName": "e-story, e-release, e-michael-suyama"
    },
    {
        "Id": "Task 27",
        "Title": "Task - 29033",
        "Status": "Testing",
        "Summary": "Fix the issues reported in data binding.",
        "Type": "Story",
        "Priority": "Normal",
        "Tags": "Databinding",
        "Estimate": "3.5",
        "Assignee": "Janet Leverling",
        "RankId": 4,
        "Color": "#02897B",
        "ClassName": "e-story, e-normal, e-janet-leverling"
    },
    {
        "Id": "Task 28",
        "Title": "Task - 29034",
        "Status": "Testing",
        "Summary": "Test editing functionality.",
        "Type": "Story",
        "Priority": "Normal",
        "Tags": "Editing,Test",
        "Estimate": 0.5,
        "Assignee": "Nancy Davloio",
        "RankId": 5,
        "Color": "#02897B",
        "ClassName": "e-story, e-normal, e-nancy-davloio"
    },
    {
        "Id": "Task 29",
        "Title": "Task - 29035",
        "Status": "Testing",
        "Summary": "Fix editing issues reported in Firefox.",
        "Type": "Bug",
        "Priority": "Critical",
        "Tags": "Editing,Fix",
        "Estimate": 1.5,
        "Assignee": "Robert King",
        "RankId": 7,
        "Color": "#E64A19",
        "ClassName": "e-bug, e-critical, e-robert-king"
    },
    {
        "Id": "Task 30",
        "Title": "Task - 29036",
        "Status": "Testing",
        "Summary": "Test editing feature in the IE browser.",
        "Type": "Story",
        "Priority": "Normal",
        "Tags": "Testing",
        "Estimate": 5.5,
        "Assignee": "Janet Leverling",
        "RankId": 10,
        "Color": "#02897B",
        "ClassName": "e-story, e-normal, e-janet-leverling"
    }
];
window.cardData = [
    {
        "Id": "Task 1",
        "Title": "Task - 29001",
        "Status": "Open",
        "Summary": "Analyze customer requirements.",
        "Priority": "High",
        "Tags": "Bug, Release Bug",
        "RankId": 1,
        "Assignee": "Nancy Davloio"
    },
    {
        "Id": "Task 2",
        "Title": "Task - 29002",
        "Status": "InProgress",
        "Summary": "Add responsive support to applicaton",
        "Priority": "Low",
        "Tags": "Story, Kanban",
        "RankId": 1,
        "Assignee": "Andrew Fuller"
    },
    {
        "Id": "Task 3",
        "Title": "Task - 29003",
        "Status": "Open",
        "Summary": "Show the retrived data from the server in grid control.",
        "Priority": "High",
        "Tags": "Bug, Breaking Issue",
        "RankId": 2,
        "Assignee": "Janet Leverling"
    },
    {
        "Id": "Task 4",
        "Title": "Task - 29004",
        "Status": "Open",
        "Summary": "Fix the issues reported in the IE browser.",
        "Priority": "High",
        "Tags": "Bug, Customer",
        "RankId": 3,
        "Assignee": "Andrew Fuller"
    },
    {
        "Id": "Task 5",
        "Title": "Task - 29005",
        "Status": "Review",
        "Summary": "Improve application performance.",
        "Priority": "Normal",
        "Tags": "Story, Kanban",
        "RankId": 1,
        "Assignee": "Steven walker"
    },
    {
        "Id": "Task 6",
        "Title": "Task - 29009",
        "Status": "Review",
        "Summary": "API Improvements.",
        "Priority": "Critical",
        "Tags": "Bug, Customer",
        "RankId": 2,
        "Assignee": "Nancy Davloio"
    },
    {
        "Id": "Task 7",
        "Title": "Task - 29010",
        "Status": "Close",
        "Summary": "Fix cannot open user's default database sql error.",
        "Priority": "High",
        "Tags": "Bug, Internal",
        "RankId": 8,
        "Assignee": "Margaret hamilt"
    },
    {
        "Id": "Task 8",
        "Title": "Task - 29015",
        "Status": "Open",
        "Summary": "Fix the filtering issues reported in safari.",
        "Priority": "Critical",
        "Tags": "Bug, Breaking Issue",
        "RankId": 4,
        "Assignee": "Margaret hamilt"
    },
    {
        "Id": "Task 9",
        "Title": "Task - 29016",
        "Status": "Review",
        "Summary": "Fix the issues reported in IE browser.",
        "Priority": "High",
        "Tags": "Bug, Customer",
        "RankId": 3,
        "Assignee": "Andrew Fuller"
    },
    {
        "Id": "Task 10",
        "Title": "Task - 29017",
        "Status": "Review",
        "Summary": "Enhance editing functionality.",
        "Priority": "Normal",
        "Tags": "Story, Kanban",
        "RankId": 4,
        "Assignee": "Janet Leverling"
    },
    {
        "Id": "Task 11",
        "Title": "Task - 29018",
        "Status": "Close",
        "Summary": "Arrange web meeting with customer to get login page requirement.",
        "Priority": "High",
        "Tags": "Feature",
        "RankId": 1,
        "Assignee": "Andrew Fuller"
    },
    {
        "Id": "Task 12",
        "Title": "Task - 29020",
        "Status": "Close",
        "Summary": "Login page validation.",
        "Priority": "Low",
        "Tags": "Bug",
        "RankId": 2,
        "Assignee": "Margaret hamilt"
    },
    {
        "Id": "Task 13",
        "Title": "Task - 29021",
        "Status": "Close",
        "Summary": "Test the application in IE browser.",
        "Priority": "Normal",
        "Tags": "Bug",
        "RankId": 3,
        "Assignee": "Steven walker"
    },
    {
        "Id": "Task 14",
        "Title": "Task - 29022",
        "Status": "Close",
        "Summary": "Analyze stored procedure.",
        "Priority": "Critical",
        "Tags": "CustomSample",
        "RankId": 4,
        "Assignee": "Janet Leverling"
    },
    {
        "Id": "Task 15",
        "Title": "Task - 29024",
        "Status": "Review",
        "Summary": "Check login page validation.",
        "Priority": "Low",
        "Tags": "Story",
        "RankId": 5,
        "Assignee": "Nancy Davloio"
    },
    {
        "Id": "Task 16",
        "Title": "Task - 29025",
        "Status": "Close",
        "Summary": "Add input validation for editing.",
        "Priority": "Critical",
        "Tags": "Bug, Breaking Issue",
        "RankId": 5,
        "Assignee": "Andrew Fuller"
    },
    {
        "Id": "Task 17",
        "Title": "Task - 29026",
        "Status": "InProgress",
        "Summary": "Improve performance of editing functionality.",
        "Priority": "Critical",
        "Tags": "Bug, Customer",
        "RankId": 2,
        "Assignee": "Nancy Davloio"
    },
    {
        "Id": "Task 18",
        "Title": "Task - 29027",
        "Status": "Open",
        "Summary": "Arrange web meeting for cutomer requirement.",
        "Priority": "High",
        "Tags": "Story",
        "RankId": 5,
        "Assignee": "Steven walker"
    },
    {
        "Id": "Task 19",
        "Title": "Task - 29029",
        "Status": "Review",
        "Summary": "Fix the issues reported by the customer.",
        "Priority": "High",
        "Tags": "Bug",
        "RankId": 6,
        "Assignee": "Janet Leverling"
    },
    {
        "Id": "Task 20",
        "Title": "Task - 29030",
        "Status": "InProgress",
        "Summary": "Test editing functionality",
        "Priority": "Low",
        "Tags": "Story",
        "RankId": 3,
        "Assignee": "Janet Leverling"
    },
    {
        "Id": "Task 21",
        "Title": "Task - 29031",
        "Status": "InProgress",
        "Summary": "Check filtering validation",
        "Priority": "Normal",
        "Tags": "Feature, Release",
        "RankId": 4,
        "Assignee": "Janet Leverling"
    },
    {
        "Id": "Task 22",
        "Title": "Task - 29032",
        "Status": "InProgress",
        "Summary": "Arrange web meeting with customer to get login page requirement",
        "Priority": "Critical",
        "Tags": "Feature",
        "RankId": 5,
        "Assignee": "Margaret hamilt"
    },
    {
        "Id": "Task 23",
        "Title": "Task - 29033",
        "Status": "Open",
        "Summary": "Arrange web meeting with customer to get editing requirements",
        "Priority": "Critical",
        "Tags": "Story, Improvement",
        "RankId": 6,
        "Assignee": "Andrew Fuller"
    },
    {
        "Id": "Task 24",
        "Title": "Task - 29034",
        "Status": "InProgress",
        "Summary": "Fix the issues reported by the customer.",
        "Priority": "Critical",
        "Tags": "Bug, Customer",
        "RankId": 6,
        "Assignee": "Steven walker"
    },
    {
        "Id": "Task 25",
        "Title": "Task - 29035",
        "Status": "Close",
        "Summary": "Fix the issues reported in Safari browser.",
        "Priority": "High",
        "Tags": "Bug",
        "RankId": 6,
        "Assignee": "Nancy Davloio"
    },
    {
        "Id": "Task 26",
        "Title": "Task - 29036",
        "Status": "Review",
        "Summary": "Check Login page validation.",
        "Priority": "Critical",
        "Tags": "Bug, Customer",
        "RankId": 7,
        "Assignee": "Margaret hamilt"
    },
    {
        "Id": "Task 27",
        "Title": "Task - 29037",
        "Status": "Open",
        "Summary": "Fix the issues reported in data binding.",
        "Priority": "Normal",
        "Tags": "Bug",
        "Estimate": "3.5",
        "RankId": 7,
        "Assignee": "Steven walker"
    },
    {
        "Id": "Task 28",
        "Title": "Task - 29038",
        "Status": "Close",
        "Summary": "Test editing functionality.",
        "Priority": "Normal",
        "Tags": "Story",
        "Estimate": 0.5,
        "RankId": 7,
        "Assignee": "Steven walker"
    }
];

window.kanbanPizzaData = [{
    "Id": 1,
    "OrderID": "Order ID - #16365",
    "Title": "Mexican Green Wave",
    "Type": "Vegetarian",
    "Size": "Small",
    "Category": "Order",
    "Description": "Stromboli sandwich with chili sauce.",
    "Tags": "Onions, Pepper, Cheese",
    "ImageURL": "Mexican_Green_Wave.jpg",
    "Price": "$4.79"
},
{
    "Id": 2,
    "OrderID": "Order ID - #16366",
    "Title": "Fresh Veggie",
    "Type": "Vegetarian",
    "Size": "Medium",
    "Category": "Order",
    "Description": "Veggie with Onions and Capsicum.",
    "Tags": "Onions, Capsicum",
    "ImageURL": "Fresh_Veggie.jpg",
    "Price": "$11.99"
},
{
    "Id": 3,
    "OrderID": "Order ID - #16367",
    "Title": "Peppy Paneer",
    "Type": "Vegetarian",
    "Size": "Large",
    "Category": "Ready to Serve",
    "Description": "It's made using toppings of tomato, mozzarella cheese and fresh basil.",
    "Tags": "Onions, Pepper, Cheese",
    "ImageURL": "Peppy_Paneer.jpg",
    "Price": "$14.99"
},
{
    "Id": 4,
    "OrderID": "Order ID - #16368",
    "Title": "Margherita",
    "Type": "Vegetarian",
    "Size": "Small",
    "Category": "Menu",
    "Description": "Lebanese Pizza topped with tomato sauce.",
    "Tags": "Onions, Pepper, Cheese",
    "ImageURL": "Margherit.jpg",
    "Price": "$4.79"
},
{
    "Id": 5,
    "OrderID": "Order ID - #16369",
    "Title": "Indian Tandoori Paneer",
    "Type": "Vegetarian",
    "Size": "Medium",
    "Category": "Delivered",
    "Description": "Tandoori Paneer with capsicum, red paprika and mint.",
    "Tags": "Paneer, Capsicum",
    "ImageURL": "IndianTandooriPaneer.jpg",
    "Price": "$11.99"
},
{
    "Id": 6,
    "OrderID": "Order ID - #16370",
    "Title": "Pepper Barbecue Chicken",
    "Type": "Non-Vegetarian",
    "Size": "Medium",
    "Category": "Ready to Serve",
    "Description": "Pepper Barbecue Chicken with cheese.",
    "Tags": "Pepper, Chicken, Cheese",
    "ImageURL": "Pepper_Barbeque.jpg",
    "Price": "$11.99"
},
{
    "Id": 7,
    "OrderID": "Order ID - #16371",
    "Title": "Chicken Sausage",
    "Type": "Non-Vegetarian",
    "Size": "Large",
    "Category": "Ready to Serve",
    "Description": "Chicken Sausage with cheese.",
    "Tags": "Cheese, Chicken",
    "ImageURL": "Chicken_Sausage.jpg",
    "Price": "$14.99"
},
{
    "Id": 8,
    "OrderID": "Order ID - #16372",
    "Title": "Chicken Golden Delight",
    "Type": "Non-Vegetarian",
    "Size": "Large",
    "Category": "Order",
    "Description": "Barbeque chicken with a topping of golden corn loaded with extra cheese.",
    "Tags": "Onions, BBQ, Prawn",
    "ImageURL": "Chicken_Golden_Delight.jpg",
    "Price": "$14.99"
},
{
    "Id": 9,
    "OrderID": "Order ID - #16373",
    "Title": "Pepper Barbecue and Onion",
    "Type": "Non-Vegetarian",
    "Size": "Medium",
    "Category": "Menu",
    "Description": "Pepper Barbecue chicken with Onion.",
    "Tags": "Pepper, Chicken",
    "ImageURL": "Pepper_Barbeque_Onion.jpg",
    "Price": "$11.99"
},
{
    "Id": 10,
    "OrderID": "Order ID - #16374",
    "Title": "Chicken Fiesta",
    "Type": "Non-Vegetarian",
    "Size": "Small",
    "Category": "Delivered",
    "Description": "Grilled Chicken Rashers with Peri-Peri chicken, Onion and Capsicum.",
    "Tags": "Chicken, Capsicum",
    "ImageURL": "chunky-chicken.png",
    "Price": "$4.79"
},
{
    "Id": 11,
    "OrderID": "Order ID - #16375",
    "Title": "Double Cheese Margherita",
    "Type": "Vegetarian",
    "Size": "Medium",
    "Category": "Delivered",
    "Description": "Margherita with chili sauce and double Cheese.",
    "Tags": "Onions, Pepper",
    "ImageURL": "Double_Cheese_Margherita.jpg",
    "Price": "$11.99"
},
{
    "Id": 12,
    "OrderID": "Order ID - #16376",
    "Title": "Veggie Paradise",
    "Type": "Vegetarian",
    "Size": "Large",
    "Category": "Menu",
    "Description": "Veggie Delight with Goldern Corn, Black Olives, Capsicum and red Paprika.",
    "Tags": "Corn, Capsicum",
    "ImageURL": "Veggie_Paradise.jpg",
    "Price": "$14.99"
},
{
    "Id": 13,
    "OrderID": "Order ID - #16377",
    "Title": "Cheese and Corn",
    "Type": "Vegetarian",
    "Size": "Large",
    "Category": "Order",
    "Description": "Cheese with golden corn.",
    "Tags": "Cheese, Corn",
    "ImageURL": "Corn_Cheese.jpg",
    "Price": "$14.99"
},
{
    "Id": 14,
    "OrderID": "Order ID - #16378",
    "Title": "Chicken Tikka",
    "Type": "Non-Vegetarian",
    "Size": "Medium",
    "Category": "Ready to Serve",
    "Description": "Tandoori masala with Chicken Tikka, Onion, red paprika and mint.",
    "Tags": "Chicken, Tikka, Paprika",
    "ImageURL": "IndianChickenTikka.jpg",
    "Price": "$11.99"
},
{
    "Id": 15,
    "OrderID": "Order ID - #16379",
    "Title": "Chicken Dominator",
    "Type": "Non-Vegetarian",
    "Size": "Small",
    "Category": "Menu",
    "Description": "Double Pepper Barbecue Chicken with Peri-Peri Chicken, Chicken Tikka, Grilled and Rashers.",
    "Tags": "Pepper, Chicken",
    "ImageURL": "Dominator.jpg",
    "Price": "$4.79"
},
{
    "Id": 16,
    "OrderID": "Order ID - #16380",
    "Title": "Deluxe Veggie",
    "Type": "Vegetarian",
    "Size": "Medium",
    "Category": "Delivered",
    "Description": "Onions and Capsicum those delectable mushrooms with paneer and golden corn to top it all.",
    "Tags": "Mushrooms, Corn",
    "ImageURL": "Deluxe_Veggie.jpg",
    "Price": "$11.99"
},
{
    "Id": 17,
    "OrderID": "Order ID - #16381",
    "Title": "Farm House",
    "Type": "Vegetarian",
    "Size": "Large",
    "Category": "Menu",
    "Description": "Crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes.",
    "Tags": "Capsicum, Mushrooms",
    "ImageURL": "Farmhouse.jpg",
    "Price": "$14.99"
},
{
    "Id": 18,
    "OrderID": "Order ID - #16382",
    "Title": "Veg Extravanganza",
    "Type": "Vegetarian",
    "Size": "Large",
    "Category": "Served",
    "Description": "Pizza with corn, olives, onions, capsicum, tomatoes and jalapeno with cheese to go all around.",
    "Tags": "Corn, Mushrooms",
    "ImageURL": "Veg_Extravaganz.jpg",
    "Price": "$14.99"
},
{
    "Id": 19,
    "OrderID": "Order ID - #16383",
    "Title": "Margherita",
    "Type": "Vegetarian",
    "Size": "Small",
    "Category": "Ready to Deliver",
    "Description": "Lebanese Pizza topped with tomato sauce.",
    "Tags": "Onions, Pepper, Cheese",
    "ImageURL": "Margherit.jpg",
    "Price": "$4.79"
},
{
    "Id": 20,
    "OrderID": "Order ID - #16384",
    "Title": "Pepper Barbecue and Onion",
    "Type": "Non-Vegetarian",
    "Size": "Medium",
    "Category": "Ready to Deliver",
    "Description": "Pepper Barbecue chicken with Onion.",
    "Tags": "Onions, Pepper, Chicken",
    "ImageURL": "Pepper_Barbeque_Onion.jpg",
    "Price": "$11.99"
},
{
    "Id": 21,
    "OrderID": "Order ID - #16385",
    "Title": "Veggie Paradise",
    "Type": "Vegetarian",
    "Size": "Large",
    "Category": "Ready to Deliver",
    "Description": "Veggie Delight with Goldern Corn, Black Olives, Capsicum and red Paprika.",
    "Tags": "Corn, Capsicum, Pepper",
    "ImageURL": "Veggie_Paradise.jpg",
    "Price": "$14.99"
},
{
    "Id": 22,
    "OrderID": "Order ID - #16386",
    "Title": "Chicken Dominator",
    "Type": "Non-Vegetarian",
    "Size": "Small",
    "Category": "Ready to Deliver",
    "Description": "Double Pepper Barbecue Chicken with Peri-Peri Chicken, Chicken Tikka, Grilled and Rashers.",
    "Tags": "Pepper, Chicken",
    "ImageURL": "Dominator.jpg",
    "Price": "$4.79"
}
];

window.panelData = [
    {
        'panel1': { 'sizeX': 4, 'sizeY': 3, 'row': 0, 'col': 0 },
        'panel3': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel3': { 'sizeX': 4, 'sizeY': 3, 'row': 1, 'col': 2 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel3': { 'sizeX': 3, 'sizeY': 3, 'row': 1, 'col': 3 },
        'panel2': { 'sizeX': 3, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 2 },
        'panel5': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel4': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 4 }
    },
    {
        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 4 },
        'panel2': { 'sizeX': 4, 'sizeY': 3, 'row': 1, 'col': 0 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }
    },
    {
        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },
        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },
        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },
        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }
    }
];

/**
 * Sample data
 */
window.expenseData = [
    {
        'UniqueId': 'T100003',
        'DateTime': new Date(1488359820000),
        'Category': 'Food',
        'PaymentMode': 'Cash',
        'TransactionType': 'Expense',
        'Description': 'Confederate cush',
        'MonthShort': 'Mar',
        'Amount': '900',
        'MonthFull': 'March, 2017',
        'FormattedDate': '03/01/2017 08:53 PM',
        'Device': 'Tablet'
    }, {
        'UniqueId': 'T100004',
        'DateTime': new Date(1491038220000),
        'Category': 'Transportation',
        'PaymentMode': 'Credit Card',
        'TransactionType': 'Expense',
        'Description': 'Public and other transportation',
        'MonthShort': 'Apr',
        'Amount': '1200',
        'MonthFull': 'April, 2017',
        'FormattedDate': '04/01/2017 10:44 AM',
        'Device': 'Desktop'
    }, {
        'UniqueId': 'T100005',
        'DateTime': new Date(1493630220000),
        'Category': 'Transportation',
        'PaymentMode': 'Cash',
        'TransactionType': 'Expense',
        'Description': 'Public and other transportation',
        'MonthShort': 'May',
        'Amount': '600',
        'MonthFull': 'May, 2017',
        'FormattedDate': '05/01/2017 03:25 PM',
        'Device': 'Mobile'
    },
];
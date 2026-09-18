// data/people.js
const peopleData = [
    { lastName: 'Liu', firstName: 'Shinan', role: 'Faculty', education: 'Ph.D. from UChicago', status: 'Director', photo: 'images/people/optimized/shinan-liu.webp', website: 'https://www.shinan.info/' },
    { lastName: 'Bai', firstName: 'Yihan', role: 'Intern', education: 'Undergrad from WHU', status: '2026 Summer - ', photo: 'images/people/optimized/yihan-bai.webp' },
    { lastName: 'Cao', firstName: 'Hangcheng', role: 'Postdoc Scholar', education: 'Postdoc from CityU, Ph.D. from Hunan/NTU', status: '2026 Summer - ', photo: 'images/people/optimized/hangcheng-cao.webp' },
    { lastName: 'Chen', firstName: 'Zerui', role: 'Ph.D. Student', education: 'M.S. from HIT', status: '2026 Spring - ', photo: 'images/people/optimized/zerui-chen.webp', website: '#' },
    { lastName: 'Dan', firstName: 'Zihao', role: 'Ph.D. Student', education: 'M.S. from ZJU', status: '2025 Fall - ', photo: 'images/people/optimized/zihao-dan.webp', website: '#' },
    { lastName: 'Ding', firstName: 'Junhui', role: 'MPhil Student', education: 'Undergrad from THU, Interned at HKU from 2025 Summer', status: '2026 Fall - ', photo: 'images/people/optimized/junhui-ding.webp' },
    { lastName: 'Gan', firstName: 'Minghao', role: 'Intern', education: 'Undergrad from SYSU', status: '2026 Spring - ', photo: 'images/people/optimized/minghao-gan.webp', website: 'https://ganminghao.github.io/' },
    { lastName: 'Guo', firstName: 'Zhaochen', role: 'Intern', education: 'Undergrad from UESTC', status: '2025 Summer - ', photo: 'images/people/optimized/zhaochen-guo.webp' },
    { lastName: 'Li', firstName: 'Ronghua', role: 'Postdoc Scholar', education: 'Ph.D. from PolyU', status: '2026 Fall - ', photo: 'images/people/optimized/ronghua-li.webp' },
    { lastName: 'Lian', firstName: 'Jinzhao', role: 'Intern', education: 'B.S. from RUC', status: '2026 Spring - ', photo: 'images/people/optimized/jinzhao-lian.webp' },
    { lastName: 'Liu', firstName: 'Chengeng', role: 'Intern', education: 'M.S. from BU', status: '2026 Spring - ', photo: 'images/people/optimized/chengeng-liu.webp' },
    { lastName: 'Luo', firstName: 'Zhifan', role: 'Ph.D. Student', education: 'M.S. from ZJU', status: '2026 Summer - ', photo: 'images/people/optimized/zhifan-luo.webp', website: 'https://sio-2.github.io/' },
    { lastName: 'Schoen', firstName: 'Adrien', role: 'Postdoc Scholar', education: 'Postdoc from CNRS; Ph.D. from Paris-Saclay', status: '2026 Fall - ', photo: 'images/people/placeholders/adrien-schoen.svg' },
    { lastName: 'Sun', firstName: 'He', role: 'Postdoc Scholar', education: 'Ph.D. from USTC', status: '2026 Fall - ', photo: 'images/people/optimized/he-sun.webp', website: 'https://ustc-sunny.github.io/' },
    { lastName: 'Zhang', firstName: 'Jialin', role: 'Intern', education: 'Undergrad from Tongji U', status: '2025 Summer - ', photo: 'images/people/optimized/jialin-zhang.webp' },
    { lastName: 'Zhang', firstName: 'Jinyu', role: 'Intern', education: 'Undergrad from HKU', status: '2025 Summer - ', photo: 'images/people/optimized/jinyu-zhang.webp' },
    { lastName: 'Zhou', firstName: 'Tianyufei', role: 'MPhil Student', education: 'B.S. from SYSU', status: '2026 Spring - ', photo: 'images/people/optimized/tianyufei-zhou.webp', website: 'https://ztyf.github.io/' }
].sort((a, b) => a.lastName.localeCompare(b.lastName));

const alumniData = [
    { lastName: 'Qiu', firstName: 'Mingxi', role: 'Intern', education: 'M.S. from THU', status: '2025 Fall - 2026 Spring', next: '-> Ph.D. Student at VT CS', photo: 'images/people/optimized/mingxi-qiu.webp' },
    { lastName: 'Wang', firstName: 'Doris', aliases: ['Yining Wang'], role: 'Intern', education: 'M.S. from UToronto', status: '2025 Summer - 2026 Spring', next: '-> Ph.D. Student at NYU CS', photo: 'images/people/placeholders/doris-wang.svg' },
    { lastName: 'Yuan', firstName: 'Ziwen', role: 'Intern', education: 'M.S. from CMU', status: '2025 Fall - 2026 Spring', next: '-> Ph.D. Student at PSU CS', photo: 'images/people/placeholders/ziwen-yuan.svg' },
    { lastName: 'Zhang', firstName: 'Xinchen', role: 'Postdoc Scholar', education: 'Ph.D. from HKU', status: '2025 Fall - 2026 Summer', next: '-> Tenured Associate Professor @ NEU (985, 211)', photo: 'images/people/optimized/xinchen-zhang.webp', website: '#' }
].sort((a, b) => a.lastName.localeCompare(b.lastName));

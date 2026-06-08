// data/people.js
const peopleData = [
    { lastName: 'Liu', firstName: 'Shinan', role: 'Faculty', education: 'Ph.D. from UChicago', status: 'Director', photo: 'images/people/shinan-liu.jpg', website: 'https://www.shinan.info/' },
    { lastName: 'Bai', firstName: 'Yihan', role: 'Intern', education: 'Undergrad from WHU', status: '', photo: 'images/people/yihan-bai.jpg' },
    { lastName: 'Cao', firstName: 'Hangcheng', role: 'Postdoc Scholar', education: 'Postdoc from CityU, Ph.D. from Hunan/NTU', status: '2026 Summer - ', photo: 'images/people/hangcheng-cao.png' },
    { lastName: 'Chen', firstName: 'Zerui', role: 'Ph.D. Student', education: 'M.S. from HIT', status: '2026 Spring - ', photo: 'images/people/zerui-chen.jpg', website: '#' },
    { lastName: 'Dan', firstName: 'Zihao', role: 'Ph.D. Student', education: 'M.S. from ZJU', status: '2025 Fall - ', photo: 'images/people/zihao-dan.jpg', website: '#' },
    { lastName: 'Ding', firstName: 'Junhui', role: 'MPhil Student', education: 'Undergrad from THU, Interned at HKU from 2025 Summer', status: '2026 Fall - ', photo: 'images/people/junhui-ding.jpg' },
    { lastName: 'Gan', firstName: 'Minghao', role: 'Intern', education: 'Undergrad from SYSU', status: '2026 Spring - ', photo: 'images/people/minghao-gan.jpg', website: 'https://ganminghao.github.io/' },
    { lastName: 'Guo', firstName: 'Zhaochen', role: 'Intern', education: 'Undergrad from UESTC', status: '2025 Summer - ', photo: 'images/people/zhaochen-guo.jpg' },
    { lastName: 'Li', firstName: 'Ronghua', role: 'Postdoc Scholar', education: 'Ph.D. from PolyU', status: '2026 Fall - ', photo: 'images/people/ronghua-li.jpg' },
    { lastName: 'Lian', firstName: 'Jinzhao', role: 'Intern', education: 'B.S. from RUC', status: '2026 Spring - ', photo: 'images/people/jinzhao-lian.jpg' },
    { lastName: 'Liu', firstName: 'Chengeng', role: 'Intern', education: 'M.S. from BU', status: '2026 Spring - ', photo: 'images/people/chengeng-liu.jpg' },
    { lastName: 'Luo', firstName: 'Zhifan', role: 'Ph.D. Student', education: 'M.S. from ZJU', status: '2026 Summer - ', photo: 'images/people/zhifan-luo.png', website: 'https://sio-2.github.io/' },
    { lastName: 'Schoen', firstName: 'Adrien', role: 'Postdoc Scholar', education: 'Postdoc from CNRS; Ph.D. from Paris-Saclay', status: '2026 Fall - ', photo: 'https://placehold.co/400x400/E8E2DD/4A4A4A?text=AS' },
    { lastName: 'Sun', firstName: 'He', role: 'Postdoc Scholar', education: 'Ph.D. from USTC', status: '2026 Fall - ', photo: 'images/people/he-sun.jpg', website: 'https://ustc-sunny.github.io/' },
    { lastName: 'Zhang', firstName: 'Jialin', role: 'Intern', education: 'Undergrad from Tongji U', status: '2025 Summer - ', photo: 'images/people/jialin-zhang.jpg' },
    { lastName: 'Zhang', firstName: 'Jinyu', role: 'Intern', education: 'Undergrad from HKU', status: '2025 Summer - ', photo: 'images/people/jinyu-zhang.jpg' },
    { lastName: 'Zhang', firstName: 'Xinchen', role: 'Postdoc Scholar', education: 'Ph.D. from HKU', status: '2025 Fall - ', photo: 'images/people/xinchen-zhang.jpg', website: '#' },
    { lastName: 'Zhou', firstName: 'Tianyufei', role: 'MPhil Student', education: 'B.S. from SYSU', status: '2026 Spring - ', photo: 'images/people/tianyufei-zhou.jpg', website: 'https://ztyf.github.io/' }
].sort((a, b) => a.lastName.localeCompare(b.lastName));

const alumniData = [
    { lastName: 'Qiu', firstName: 'Mingxi', role: 'Intern', education: 'M.S. from THU', status: '2025 Fall - 2026 Spring', next: '-> Ph.D. Student at VT CS', photo: 'images/people/mingxi-qiu.jpg' },
    { lastName: 'Wang', firstName: 'Doris', role: 'Intern', education: 'M.S. from UToronto', status: '2025 Summer - 2026 Spring', next: '-> Ph.D. Student at NYU CS', photo: 'https://placehold.co/400x400/E8E2DD/4A4A4A?text=DW' },
    { lastName: 'Yuan', firstName: 'Ziwen', role: 'Intern', education: 'M.S. from CMU', status: '2025 Fall - 2026 Spring', next: '-> Ph.D. Student at PSU CS', photo: 'https://placehold.co/400x400/E8E2DD/4A4A4A?text=ZY' }
].sort((a, b) => a.lastName.localeCompare(b.lastName));

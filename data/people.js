// data/people.js
const peopleData = [
    { lastName: 'Liu', firstName: 'Shinan', role: 'Faculty', education: 'Ph.D. from UChicago', status: 'Director', photo: 'images/people/shinan-liu.jpg', website: 'https://www.shinan.info/' },
    { lastName: 'Cai', firstName: 'Yixue', role: 'MPhil Student', education: 'B.S. from Nankai', status: '2026 Fall - ', photo: 'images/people/yixue-cai.jpg' },
    { lastName: 'Chen', firstName: 'Zerui', role: 'Ph.D. Student', education: 'M.S. from HIT', status: '2026 Spring - ', photo: 'images/people/zerui-chen.jpg', website: '#' },
    { lastName: 'Dan', firstName: 'Zihao', role: 'Ph.D. Student', education: 'M.S. from ZJU', status: '2025 Fall - ', photo: 'images/people/zihao-dan.jpg', website: '#' },
    { lastName: 'Ding', firstName: 'Junhui', role: 'Intern', education: 'Undergrad from THU', status: '2025 Summer - ', photo: 'images/people/junhui-ding.jpg' },
    { lastName: 'Gan', firstName: 'Minghao', role: 'Intern', education: 'Undergrad from SYSU', status: '2026 Spring - ', photo: 'images/people/minghao-gan.jpg' },
    { lastName: 'Guo', firstName: 'Zhaochen', role: 'Intern', education: 'Undergrad from UESTC', status: '2025 Summer - ', photo: 'images/people/zhaochen-guo.jpg' },
    { lastName: 'Qiu', firstName: 'Mingxi', role: 'Intern', education: 'M.S. from THU', status: '2025 Fall - ', photo: 'images/people/mingxi-qiu.jpg' },
    { lastName: 'Wang', firstName: 'Doris', role: 'Intern', education: 'M.S. from UToronto', status: '2025 Summer - ', photo: 'https://placehold.co/400x400/E8E2DD/4A4A4A?text=DW' },
    { lastName: 'Zhang', firstName: 'Jialin', role: 'Intern', education: 'Undergrad from Tongji U', status: '2025 Summer - ', photo: 'images/people/jialin-zhang.jpg' },
    { lastName: 'Zhang', firstName: 'Jinyu', role: 'Intern', education: 'Undergrad from HKU', status: '2025 Summer - ', photo: 'images/people/jinyu-zhang.jpg' },
    { lastName: 'Zhang', firstName: 'Xinchen', role: 'Postdoc Scholar', education: 'Ph.D. from HKU', status: '2025 Fall - ', photo: 'images/people/xinchen-zhang.jpg', website: '#' },
    { lastName: 'Zhou', firstName: 'Tianyufei', role: 'MPhil Student', education: 'B.S. from SYSU', status: '2026 Spring - ', photo: 'images/people/tianyufei-zhou.jpg' }
].sort((a, b) => a.lastName.localeCompare(b.lastName));
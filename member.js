function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'React', 'Node.js']
    };

    // Using forEach to iterate over skills
    member.skills.forEach(function(skill) {
        console.log(skill);
    });

    return member;
}
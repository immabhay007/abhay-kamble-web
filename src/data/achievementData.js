import bestIntern from '../assets/png/best-intern.png'
import azureCourse from '../assets/png/azure-course.png'
import bestEmployee from '../assets/png/recognition-certificate.png'

export const achievementData = {
        bio: "Recognized with the Best Intern Award for exceptional contributions during internship, honored with a Certificate of Recognition for dedication and high-quality project delivery, and certified in Microsoft Azure through the Zero to Hero program, validating cloud expertise and commitment to professional excellence.",
        achievements : [
        {
            id: 1,
            title: 'Best Intern Award',
            details: 'Recognized for outstanding performance and dedication during my internship. Awarded for demonstrating strong problem-solving skills, and delivering high-quality contributions to real-world projects.',
            date: 'Aug 08, 2024',
            field: 'Full Stack Development',
            image: bestIntern
        },
        {
            id: 2,
            title: 'Certificate of Recognition',
            details: 'Awarded in recognition of my consistent efforts, dedication, and valuable contributions as a Full Stack Developer.',
            date: 'September 24, 2024',
            field: 'Full Stack Development',
            image: bestEmployee
        },
        {
            id: 3,
            title: 'Azure Zero to Hero Certification',
            details: 'Successfully completed the Azure Zero to Hero course, gaining hands-on experience in cloud computing, automation, and deployment on Microsoft Azure.',
            date: 'June, 2025',
            field: 'Cloud & Automation',
            image: azureCourse
        }
    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
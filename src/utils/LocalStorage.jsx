const employees = [
      {
        "Id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "failed": false,
            "title": "Update client database",
            "description": "Add new entries from last week's meeting.",
            "category": "Data Management"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "title": "Prepare sales report",
            "description": "Generate Q1 sales data charts.",
            "category": "Reporting"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Team feedback review",
            "description": "Go through team feedback for March.",
            "category": "HR"
          }
        ]
      },
      {
        "Id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "failed": false,
            "title": "Server maintenance",
            "description": "Routine check on backend servers.",
            "category": "IT Support"
          },
          {
            "active": false,
            "newTask": false,
            "failed": true,
            "title": "Client onboarding",
            "description": "Failed to contact client for initial setup.",
            "category": "Customer Support"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "title": "Design newsletter layout",
            "description": "Create April newsletter template.",
            "category": "Marketing"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Fix login bug",
            "description": "Issue with password reset link not working.",
            "category": "Development"
          }
        ]
      },
      {
        "Id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "failed": false,
            "title": "Product demo setup",
            "description": "Setup environment for product demo.",
            "category": "Sales"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "title": "Security audit checklist",
            "description": "Ensure all devices meet security standards.",
            "category": "IT"
          },
          {
            "active": false,
            "newTask": false,
            "failed": true,
            "title": "Resolve billing issue",
            "description": "Incorrect invoice sent to client.",
            "category": "Finance"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Create onboarding guide",
            "description": "Draft employee onboarding documentation.",
            "category": "HR"
          },
          {
            "active": true,
            "newTask": true,
            "failed": false,
            "title": "Customer call logs analysis",
            "description": "Analyze call center logs for issues.",
            "category": "Support"
          }
        ]
      },
      {
        "Id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "failed": false,
            "title": "Weekly social media posts",
            "description": "Schedule posts for Twitter and LinkedIn.",
            "category": "Marketing"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "title": "Team calendar update",
            "description": "Add upcoming holidays and deadlines.",
            "category": "Admin"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Event budget planning",
            "description": "Estimate costs for annual meetup.",
            "category": "Finance"
          }
        ]
      },
      {
        "Id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "active": false,
            "newTask": false,
            "failed": true,
            "title": "Prepare Q2 objectives",
            "description": "Missed deadline for setting department goals.",
            "category": "Management"
          },
          {
            "active": true,
            "newTask": true,
            "failed": false,
            "title": "UX review session",
            "description": "Review feedback on new app design.",
            "category": "Design"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Competitor analysis",
            "description": "Analyze 3 competitor strategies for product launch.",
            "category": "Strategy"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "title": "Update knowledge base",
            "description": "Add recent FAQ entries to system.",
            "category": "Support"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "title": "Cross-team sync",
            "description": "Coordinate meeting between dev and QA.",
            "category": "Coordination"
          },
          {
            "active": true,
            "newTask": true,
            "failed": false,
            "title": "Website accessibility audit",
            "description": "Check website compliance with WCAG.",
            "category": "Web Development"
          }
        ]
      }
]

const admin = [ {
      "Id": 1,
      "email": "admin@example.com",
      "password": "123"
    }]
  
//creating local storage that saves data in user browser.
//we saved employees data in local storage.
//Our data is in form of JSON so we converted it into string because then only we can see it correctly.
export const setLocalStorage = () => {
    localStorage.setItem('employess', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employess'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(`employess ka data : ${employees}`)
    console.log(`admin ka data : ${admin}`)
    console.log(admin)
    return {employees, admin}
}
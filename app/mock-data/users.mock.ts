/**
 * mock data from another API
 */
import { User } from "src/model/user.model"

type UsersMockData = {
    data: {
        users: User[],
    }
}

export const usersMockData: UsersMockData = {
    data: {
        users: [
            {
                id: "1",
                mail: "test1@example.com",
                firstName: "firstName1",
                lastName: "lastName1",
            },
            {
                id: "2",
                mail: "test2@example.com"
            },
            {
                id: "3",
                mail: "test3@example.com"
            },
            {
                id: "4",
                mail: "test4@example.com"
            },
            {
                id: "5",
                mail: "test5@example.com"
            },
        ]
    },
}
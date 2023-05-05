import { ValidatorsDataSource } from "./Validators_DataSource"
import { User } from "./entity/User"

ValidatorsDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.name = "Timber"
    user.address= "Saw"
    user.profitShare = 25
    await ValidatorsDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.name)

    console.log("Loading users from the database...")
    const users = await ValidatorsDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

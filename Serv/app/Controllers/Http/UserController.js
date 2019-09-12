'use strict'

const User = use('App/Models/User')

class UserController {

    async login({request, response, auth}) {
        const {email, password} = request.only(['email', 'password'])

        const token = await auth.attempt(email, password)
        return response.json(token)
    }

    async register({request, response}) {
        const {name, phone, email, password} = request.only([
            'name', 'phone', 'email', 'password'
        ])

        await User.create({
            name,
            phone,
            email,
            password
        })

        return response.send({message: 'Pendaftaran Member baru berhasil!'})
    }

    async show({params, response}) {
        const user = await User.find(params.id)
        const res = {
            name: user.name,
            phone: user.phone,
            email: user.email

        }

        return response.json(res)
    }
}

module.exports = UserController

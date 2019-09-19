"use strict";

const DepoReq = use("App/Models/DepoReq");

class DepoReqController {
  async index({ email }) {
    const deporeqs = await DepoReq.query({ email }).fetch();
    return deporeqs;
  }

  async store({ request, auth }) {
    const data = request.only(["nominal"]);
    const deporeq = await DepoReq.create({ user_id: auth.user.id, ...data });

    return deporeq;
  }

  async show({ params }) {
    const deporeq = await DepoReq.findOrFail(params.id);

    return deporeq;
  }

  async destroy({ params, auth, response }) {
    const deporeq = await DepoReq.findOrFail(params.id);
    if (deporeq.user_id !== auth.user.id) {
      return response.status(401).json({ message: "Data tidak bisa dihapus" });
    }
    await deporeq.delete();
  }
}

module.exports = DepoReqController;

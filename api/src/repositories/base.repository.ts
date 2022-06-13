import { Model, model } from "mongoose";

export class BaseRepository {
  #model: Model<unknown> = model("TBA");

  getModel() {
    return this.#model;
  }

  setModel(model: Model<unknown>) {
    this.#model = model;
  }

  async create(user: Record<string, unknown>) {
    try {
      const result = await this.getModel().create(user);
      await result.save();

      return result;
    } catch (_) {
      return "error";
    }
  }

  async fetchOne(conditions: Record<string, unknown>) {
    try {
      const result = await this.getModel().findOne(conditions).exec();

      return result;
    } catch (_) {
      return "error";
    }
  }

  async fetchById(id: unknown) {
    try {
      const result = await this.getModel().findById(id).exec();

      return result;
    } catch (_) {
      return "error";
    }
  }

  async fetch(conditions: Record<string, unknown>) {
    try {
      const result = await this.getModel().find(conditions).exec();

      return result;
    } catch (_) {
      return "error";
    }
  }

  async updateOne(
    conditions: Record<string, unknown>,
    updates: Record<string, unknown>
  ) {
    try {
      const result = await this.getModel()
        .updateOne(conditions, updates)
        .exec();

      return result;
    } catch (_) {
      return "error";
    }
  }

  async deleteById(id: unknown) {
    try {
      const result = await this.getModel().findByIdAndDelete(id).exec();

      return result;
    } catch (_) {
      return "error";
    }
  }

  async deleteOne(conditions: Record<string, unknown>) {
    try {
      const result = await this.getModel().findOneAndDelete(conditions).exec();

      return result;
    } catch (_) {
      return "error";
    }
  }
}

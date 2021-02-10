# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_12_100656) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
  end

  create_table "conditions", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "recipient_id"
    t.integer "sender_id"
    t.integer "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipient_id", "sender_id"], name: "index_conversations_on_recipient_id_and_sender_id", unique: true
    t.index ["recipient_id"], name: "index_conversations_on_recipient_id"
    t.index ["sender_id"], name: "index_conversations_on_sender_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_favorites_on_item_id"
    t.index ["user_id", "item_id"], name: "index_favorites_on_user_id_and_item_id", unique: true
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "item_images", force: :cascade do |t|
    t.integer "item_id", null: false
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.text "description", null: false
    t.float "price"
    t.string "subtitle"
    t.string "name", null: false
    t.integer "user_id"
    t.date "expiration_date"
    t.string "condition"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "category_id", null: false
    t.bigint "condition_id", null: false
    t.bigint "school_id", null: false
    t.index ["category_id"], name: "index_items_on_category_id"
    t.index ["condition_id"], name: "index_items_on_condition_id"
    t.index ["school_id"], name: "index_items_on_school_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "body"
    t.bigint "user_id"
    t.bigint "conversation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_messages_on_conversation_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "reports", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.string "status"
    t.string "ticket"
    t.integer "user_id", null: false
    t.integer "item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_reports_on_item_id"
    t.index ["user_id"], name: "index_reports_on_user_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "motto"
    t.string "nickname"
    t.integer "year_established"
    t.string "logo_image_url"
    t.string "name", null: false
    t.string "website"
    t.text "description"
    t.string "phone"
    t.integer "institution_size"
    t.string "shortname"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "searchstrings", force: :cascade do |t|
    t.string "string"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email_address", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email_address"], name: "index_users_on_email_address", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "favorites", "items"
  add_foreign_key "favorites", "users"
  add_foreign_key "items", "categories"
  add_foreign_key "items", "conditions"
  add_foreign_key "items", "schools"
  add_foreign_key "messages", "conversations"
  add_foreign_key "messages", "users"
  add_foreign_key "reports", "items"
  add_foreign_key "reports", "users"
end

class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text                 :content
      t.integer              :user_id   # Id of poster
      t.integer              :image_id
      t.boolean              :reply
      t.boolean              :reply_to
      t.boolean              :deleted

      t.timestamps
    end
  end
end

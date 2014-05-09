class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string           :image_file
      t.integer          :album_id
      t.integer          :image_vote_ups
      t.integer          :image_vote_downs

      t.timestamps
    end
  end
end

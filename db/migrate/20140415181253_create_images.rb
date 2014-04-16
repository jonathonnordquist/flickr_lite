class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string           :image_file
      t.integer          :album_id

      t.timestamps
    end
  end
end

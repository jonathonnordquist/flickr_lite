class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string                :album_name
      t.integer               :user_id
      t.integer               :album_vote_ups
      t.integer               :album_vote_downs

      t.timestamps
    end
  end
end

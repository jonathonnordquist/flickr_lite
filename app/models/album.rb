class Album < ActiveRecord::Base
  has_many    :images
  belongs_to  :user

  validates_presence_of :album_name, :message => "Don't be a jerk!"
end

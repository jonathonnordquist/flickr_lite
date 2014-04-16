class Image < ActiveRecord::Base
  belongs_to :album
  validates_presence_of :image_file, :message => "Don't be a jerk!"

end

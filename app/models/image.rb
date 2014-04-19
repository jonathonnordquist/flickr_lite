class Image < ActiveRecord::Base
  belongs_to :album
  has_many :comments
  validates_presence_of :image_file, :message => "Don't be a jerk!"

end

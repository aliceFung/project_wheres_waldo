class Character < ActiveRecord::Base

  def check_position(tag)
    characters = Character.all
    tag_x = tag.tag_x
    tag_y = tag.tag_y
    characters.each do |character|
      if character.real_x < tag_x +50 && character.real_x > tag_x -50
        if character.real_y < tag_y +50 && character.real_y > tag_y -50
          return true
        end
      end
    end
    return false
  end

end

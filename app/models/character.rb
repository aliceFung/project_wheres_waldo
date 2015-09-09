class Character < ActiveRecord::Base

  def self.check_position(tag)
    characters = Character.all
    tag_x = tag.tag_x
    tag_y = tag.tag_y
    characters.each do |character|
      puts "comparing coords"
      if (character.real_x < (50 + tag_x)) && (character.real_x > (-50+tag_x ))
        if (character.real_y < (50+tag_y )) && (character.real_y > (-50+tag_y ))
          return true
        end
      end
    end
    return false
  end

end

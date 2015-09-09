class Character < ActiveRecord::Base

  def self.check_position(tag, character_id)
    character = Character.find(character_id)
    puts "=================="
    puts  character_id 
    tag_x = tag.tag_x
    tag_y = tag.tag_y
    if (character.real_x < (50 + tag_x)) && (character.real_x > (-50+tag_x ))
      if (character.real_y < (50+tag_y )) && (character.real_y > (-50+tag_y ))
        puts "comparing coords true"
        return true
      end
    end
    puts "comparing coords false"
    return false
  end


end

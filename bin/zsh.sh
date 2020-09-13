#!/bin/zsh
rm -f ~/.zshrc
echo "export ZSH=~/.oh-my-zsh" >> ~/.zshrc
echo "plugins=(zsh-completions zsh-autosuggestions git)" >> ~/.zshrc
echo -e "ZSH_THEME=\"agnoster\"" >> ~/.zshrc
echo "autoload -Uz compinit && compinit" >> ~/.zshrc
echo "source /root/.oh-my-zsh/oh-my-zsh.sh" >> ~/.zshrc
echo "autoload -U up-line-or-beginning-search" >> ~/.zshrc
echo "autoload -U down-line-or-beginning-search" >> ~/.zshrc
echo "zle -N up-line-or-beginning-search" >> ~/.zshrc
echo "zle -N down-line-or-beginning-search" >> ~/.zshrc
echo -e "bindkey \"^[[A\" up-line-or-beginning-search" >> ~/.zshrc
echo -e "bindkey \"^[[B\" down-line-or-beginning-search" >> ~/.zshrc
source ~/.zshrc